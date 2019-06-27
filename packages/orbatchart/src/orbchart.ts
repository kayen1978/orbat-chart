import { Symbol } from "milsymbol";
import { select } from "d3-selection";
import { arrSum, flattenArray, walkTree } from "./utils";
import {
  GElementSelection,
  LevelLayout,
  OrbChartOptions,
  Point,
  RenderedChart,
  RenderedLevel,
  RenderedUnitNode,
  Size,
  SVGElementSelection,
  Unit,
  UnitLevelDistance,
  UnitNodeInfo,
  VerticalAlignment
} from "./types";
import {
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  DEFAULT_OPTIONS,
  MARGIN_TOP,
  STACKED_OFFSET,
  TREE_LEFT_RIGHT_OFFSET
} from "./defaults";

const CHART_STYLE = `
.o-line {
  stroke: black;
  stroke-width: 1pt;
  fill:none;
}

.o-label {
  text-anchor: middle;
}

.o-unit:hover {
  font-weight: bold;
}
`;

function createUnitNodeInfo(unit: Unit, options: Partial<OrbChartOptions>): UnitNodeInfo {
  let symb: Symbol;
  const symbolOptions = { size: options.symbolSize };
  if (options.symbolGenerator) {
    symb = options.symbolGenerator(unit.sidc, symbolOptions);
  } else {
    symb = new Symbol(
      unit.sidc,
      symbolOptions,
      // {uniqueDesignation: node.shortName || node.name},
    );
  }
  const size: Size = symb.getSize();
  const anchor: Point = symb.getAnchor();
  const octagonAnchor: Point = symb.getOctagonAnchor();
  return {
    symbolBoxSize: size, anchor, octagonAnchor, symb, unit: unit, x: 0, y: 0, ly: 0, lx: 0, rx: 0
  };
}

function putGroupAt(g: GElementSelection, node: UnitNodeInfo, x: number, y: number, debug = false) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return g.attr("transform", `translate(${dx}, ${dy})`);
}

function createGroupElement(parentElement, className: string): GElementSelection {
  return parentElement.append("g")
    .attr("class", className);
}

function drawDebugRect(groupElement: GElementSelection, fill = "#ccc") {
  if (groupElement) {
    const bbox = groupElement.node()!.getBBox();
    groupElement.append("rect").lower()
      .classed("dbg-rect", true)
      .attr("x", bbox.x)
      .attr("y", bbox.y)
      .attr("width", bbox.width)
      .attr("height", bbox.height)
      .style("fill", fill)
      .style("fill-opacity", ".4")
      .style("stroke", "#666")
      .style("stroke-width", "1.5px");
  }
}

function drawDebugPoint(parentElement, x: number, y: number, fillColor = "red") {
  parentElement.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 4)
    .attr("fill", fillColor);
}

function createUnitGroup(parentElement: GElementSelection, unitNode: UnitNodeInfo, options: OrbChartOptions): RenderedUnitNode {
  const g = createGroupElement(parentElement, "o-unit");
  g.append("g")
    .html(unitNode.symb.asSVG());
  g.append("text")
    .attr("x", unitNode.octagonAnchor.x)
    .attr("dy", "1.1em")
    .attr("y", unitNode.symbolBoxSize.height)
    .attr("class", "o-label")
    .text(unitNode.unit.name);

  if (options.onClick) {
    g.on("click", (e) => {
      // @ts-ignore
      options.onClick(unitNode);
    });
  }

  if (options.debug) {
    drawDebugRect(g);
  }

  let renderedUnitNode = unitNode as RenderedUnitNode;
  renderedUnitNode.groupElement = g;
  renderedUnitNode.boundingBox = g.node()!.getBBox();

  return renderedUnitNode;
}

function isStackedLayout(layout: LevelLayout) {
  return layout === LevelLayout.Stacked;
}

function isLeftRightLayout(layout: LevelLayout) {
  return layout === LevelLayout.TreeRight || layout === LevelLayout.TreeLeft;
}

function calculateAnchorPoints(unitNode: RenderedUnitNode) {
  const { x, y } = unitNode;
  unitNode.ly = y + (unitNode.boundingBox.height - unitNode.octagonAnchor.y);
  unitNode.lx = x - (unitNode.boundingBox.width / 2);
  unitNode.rx = x + (unitNode.boundingBox.width / 2);
}

function drawDebugAnchors(svg: SVGElementSelection, unitNode: RenderedUnitNode) {
  drawDebugPoint(svg, unitNode.x, unitNode.y);
  drawDebugPoint(svg, unitNode.x, unitNode.ly);
  drawDebugPoint(svg, unitNode.lx, unitNode.y);
  drawDebugPoint(svg, unitNode.rx, unitNode.y);
}

class OrbatChart {
  width!: number;
  height!: number;
  options: OrbChartOptions;
  groupedLevels: UnitNodeInfo[][][] = [];
  svg!: SVGElementSelection;

  constructor(private rootNode: Unit, options: Partial<OrbChartOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    if (rootNode) this._computeOrbatInfo(rootNode);
  }

  cleanup() {
    // Remove event listeners
    if (this.svg) {
      let unitGroups = this.svg.selectAll("g.o-unit");
      unitGroups.on("click", null);
    }
  }

  toSVG(size: Partial<Size>, parentElement: HTMLElement): Element {
    this.width = size.width || DEFAULT_CHART_WIDTH;
    this.height = size.height || DEFAULT_CHART_HEIGHT;
    let renderedChart = this._createSvgElement(parentElement);

    // Pass 1: Create g elements and other svg elements
    // Pass 2: Do unit layout
    // Pass 3: Draw connectors
    renderedChart.levels = this._createInitialNodeStructure(this.svg, this.groupedLevels);
    this._doNodeLayout(renderedChart);
    this._drawConnectors(renderedChart);
    return this.svg.node() as Element;
  }

  private _createSvgElement(parentElement: HTMLElement): RenderedChart {
    parentElement.innerHTML = "";
    const svg = select(parentElement).append<SVGElement>("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .attr("class", "orbat-chart");

    svg.append("style").text(CHART_STYLE);
    svg.attr("width", "100%");
    svg.attr("height", "100%");
    if (this.options.debug) {
      svg.append<SVGRectElement>("rect")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("y", "0")
        .attr("x", "0")
        .attr("width", this.width)
        .attr("height", this.height);
    }
    this.svg = svg;
    return { groupElement: <unknown>svg as GElementSelection, levels: [] }
  }

  private _computeOrbatInfo(rootNode: Unit) {
    let levels: UnitNodeInfo[][] = [];
    const nodeMap = {};

    walkTree(rootNode, (unit, levelIdx, parent) => {
      const unitNodeInfo = createUnitNodeInfo(unit, this.options);
      const currentLevel = levels[levelIdx] || [];
      if (parent) {
        unitNodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = unitNodeInfo;
      currentLevel.push(unitNodeInfo);
      levels[levelIdx] = currentLevel;
    });

    this.groupedLevels = _groupLevelsByParent();

    function _groupLevelsByParent(): UnitNodeInfo[][][] {
      let groupedLevels: UnitNodeInfo[][][] = [];
      levels.forEach((level, yIdx) => {
        let groupedLevel = level.reduce((accumulator: UnitNodeInfo[][], currentValue, currentIndex, array) => {
          if (currentIndex === 0) {
            accumulator.push([currentValue]);
            return accumulator;
          }
          if (array[currentIndex - 1].parent === currentValue.parent) {
            accumulator[accumulator.length - 1].push(currentValue);
            return accumulator
          }
          accumulator.push([currentValue]);
          return accumulator;
        }, []);
        groupedLevels[yIdx] = groupedLevel;
      });
      return groupedLevels;
    }
  }

  private _createInitialNodeStructure(parentElement: SVGElementSelection, groupedLevels: UnitNodeInfo[][][]): RenderedLevel[] {
    const options = this.options;
    let renderedLevels: RenderedLevel[] = [];
    for (const [yIdx, currentLevel] of groupedLevels.entries()) {
      if (options.maxLevels && yIdx >= options.maxLevels) break;

      let levelGElement = createGroupElement(parentElement, "o-level");
      let renderedLevel: RenderedLevel = {
        groupElement: levelGElement, unitGroups: []
      };
      renderedLevels.push(renderedLevel);

      currentLevel.forEach((unitLevelGroup, groupIdx) => {
        let levelGroupGElement = createGroupElement(levelGElement, "o-level-group");
        const units = unitLevelGroup.map(unitNode => createUnitGroup(levelGroupGElement, unitNode, options));
        renderedLevel.unitGroups.push({ groupElement: levelGroupGElement, units });
      });
    }
    return renderedLevels;
  }

  private _doNodeLayout(renderedChart: RenderedChart) {
    const numberOfLevels = this.groupedLevels.length;
    const maxLevels = this.options.maxLevels || numberOfLevels;
    const chartHeight = this.height;
    let prevY = MARGIN_TOP;
    renderedChart.levels.forEach((renderedLevel, yIdx) => {
      // if (options.orientation === ChartOrientation.Bottom)
      let y: number;
      if (this.options.verticalAlignment === VerticalAlignment.Middle) {
        y = chartHeight * ((yIdx + 1) / (numberOfLevels + 1));
      } else {
        y = prevY;
        prevY += this.options.levelPadding;
      }

      let levelLayout = LevelLayout.Horizontal;
      if (yIdx === maxLevels - 1) levelLayout = this.options.lastLevelLayout;
      this._renderLevel(renderedLevel, y, levelLayout);
    });
  }

  private _renderLevel(renderedLevel: RenderedLevel, y: number, levelLayout: LevelLayout = LevelLayout.Horizontal) {
    const options = this.options;
    const chartWidth = this.width;
    const svg = this.svg;
    const renderGroups = renderedLevel.unitGroups;
    const unitsOnLevel = flattenArray<RenderedUnitNode>(renderGroups.map(unitGroup => unitGroup.units));
    const numberOfUnitsOnLevel = unitsOnLevel.length;
    const totalWidth = arrSum(unitsOnLevel.map(u => u.boundingBox.width));

    const availableSpace = chartWidth - totalWidth;
    const padding = availableSpace / numberOfUnitsOnLevel;

    switch (levelLayout) {
      case LevelLayout.Horizontal:
        _doHorizontalLayout();
        break;
      case LevelLayout.Stacked:
      case LevelLayout.TreeRight:
      case LevelLayout.TreeLeft:
        _doStackedLayout(levelLayout);
        break;
      default:
        console.warn("Unhandled layout", levelLayout);
    }

    if (options.debug) drawDebugRect(renderedLevel.groupElement);

    function _doHorizontalLayout() {
      let xIdx = 0;
      let prevX = -padding / 2;

      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        for (const unitNode of unitLevelGroup.units) {
          let x;
          if (options.unitLevelDistance == UnitLevelDistance.EqualPadding) {
            x = prevX + unitNode.boundingBox.width / 2 + padding;
          } else {
            x = ((xIdx + 1) * chartWidth) / (numberOfUnitsOnLevel + 1);
          }

          unitNode.x = x;
          unitNode.y = y;
          calculateAnchorPoints(unitNode);

          prevX = unitNode.x + unitNode.boundingBox.width / 2;
          putGroupAt(unitNode.groupElement, unitNode, x, y, options.debug);

          if (options.debug) drawDebugAnchors(svg, unitNode);


          xIdx += 1;
        }
        if (options.debug) drawDebugRect(unitLevelGroup.groupElement, "yellow");
      });
    }

    function _doStackedLayout(layout: LevelLayout) {
      const groupsOnLevel = renderedLevel.unitGroups.length;
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let prevY = y;
        for (const [yIdx, unitNode] of unitLevelGroup.units.entries()) {
          let x = unitNode.parent ? unitNode.parent.x : ((groupIdx + 1) * chartWidth) / (groupsOnLevel + 1);


          if (layout === LevelLayout.TreeRight) {
            x += TREE_LEFT_RIGHT_OFFSET;
          } else if (layout === LevelLayout.TreeLeft) {
            x -= TREE_LEFT_RIGHT_OFFSET;
          }
          const ny = prevY;

          unitNode.x = x;
          unitNode.y = ny;
          calculateAnchorPoints(unitNode);

          prevY = unitNode.ly + STACKED_OFFSET;

          putGroupAt(unitNode.groupElement, unitNode, x, ny, options.debug);
          if (options.debug) drawDebugAnchors(svg, unitNode)

        }
        if (options.debug) drawDebugRect(unitLevelGroup.groupElement, "yellow");
      });
    }
  }

  private _drawConnectors(renderedChart: RenderedChart) {
    const nLevels = this.options.maxLevels || renderedChart.levels.length;
    renderedChart.levels.forEach((renderedLevel, yIdx) => {
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let currentLevelLayout = yIdx === nLevels - 1 ? this.options.lastLevelLayout : LevelLayout.Horizontal;
        unitLevelGroup.units.forEach((unitNode, idx) => {
          if (currentLevelLayout === LevelLayout.Stacked && idx > 0) return;
          if (isLeftRightLayout(currentLevelLayout)) return;
          this._drawUnitLevelGroupConnectorPath(unitNode);
        });
        if (isLeftRightLayout(currentLevelLayout)) {
          this._drawUnitLevelTreeLeftRightConnectorPath(unitLevelGroup.units, currentLevelLayout);
        } else {
          this._drawUnitLevelConnectorPath(unitLevelGroup.units);
        }
      });
    });
  }

  private _drawUnitLevelGroupConnectorPath(unit: UnitNodeInfo) {
    const { x, y } = unit;
    if (unit.parent) {
      const dy = y - ((y - unit.parent.y) / 2);
      const d = `M ${x}, ${y - unit.octagonAnchor.y - this.options.connectorOffset} V ${dy}`;
      this.svg.append("path")
        .attr("d", d)
        .classed("o-line", true);
    }
  }

  private _drawUnitLevelConnectorPath(unitLevelGroup: RenderedUnitNode[]) {
    let firstUnitInGroup = unitLevelGroup[0];
    let svg = this.svg;
    let parentUnit = firstUnitInGroup.parent;
    if (!parentUnit) return;
    let lastUnitInGroup = unitLevelGroup[unitLevelGroup.length - 1];

    const dy = firstUnitInGroup.y - ((firstUnitInGroup.y - parentUnit.y) / 2);
    const d1 = `M ${parentUnit.x}, ${parentUnit.ly + this.options.connectorOffset} V ${dy}`;
    svg.append("path")
      .attr("d", d1)
      .classed("o-line", true);
    const d = `M ${firstUnitInGroup.x}, ${dy} H ${lastUnitInGroup.x}`;
    svg.append("path")
      .attr("d", d)
      .classed("o-line", true);
  }

  private _drawUnitLevelTreeLeftRightConnectorPath(unitLevelGroup: RenderedUnitNode[], levelLayout: LevelLayout) {
    let svg = this.svg;
    let lastUnitInGroup = unitLevelGroup[unitLevelGroup.length - 1];
    let parentUnit = lastUnitInGroup.parent as RenderedUnitNode;
    if (!parentUnit) return;

    const d1 = `M ${parentUnit.x}, ${parentUnit.ly + this.options.connectorOffset} V ${lastUnitInGroup.y}`;
    svg.append("path")
      .attr("d", d1)
      .classed("o-line", true);

    for (const unit of unitLevelGroup) {
      let d1;
      if (levelLayout === LevelLayout.TreeRight)
        d1 = `M ${unit.lx - this.options.connectorOffset}, ${unit.y}  H ${parentUnit.x}`;
      else
        d1 = `M ${unit.rx + this.options.connectorOffset}, ${unit.y}  H ${parentUnit.x}`;
      svg.append("path")
        .attr("d", d1)
        .classed("o-line", true);
    }

  }
}

export { OrbatChart };
