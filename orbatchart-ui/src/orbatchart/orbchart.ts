import { Symbol } from "milsymbol";
import { select } from "d3-selection";
import { arrSum, flattenArray, walkTree } from "./utils";
import {
  BasicUnitNode,
  GElementSelection,
  LevelLayout,
  OrbChartOptions,
  RenderedChart,
  RenderedLevel, RenderedLevelGroup,
  RenderedUnitNode,
  Size, SpecificOptions,
  SVGElementSelection,
  Unit,
  UnitLevelDistance,
  UnitNodeInfo,
  VerticalAlignment
} from "./types";
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH, DEFAULT_OPTIONS, MARGIN_TOP, } from "./defaults";

// language=CSS format=false
const HIGHLIGT_STYLE = `

  .o-unit:hover {
    stroke: red;
    fill: blue;
  }

  .highlight {
    stroke: gray;
    stroke-dasharray: 5, 5;
    fill: white;
    fill-opacity: 0;
  }

  .highlight:hover {
    stroke: red;
    stroke-width: 2pt;
    fill: #ccc;
  }
`;

function createChartStyle(options: OrbChartOptions) {
  return `
.o-line {
  stroke: black;
  stroke-width: ${options.lineWidth}pt;
  fill:none;
}

.o-label {
  text-anchor: middle;
}

${HIGHLIGT_STYLE}
`
}

function convertBasicUnitNode2UnitNodeInfo(basicUnitNode: BasicUnitNode, options: Partial<OrbChartOptions>): UnitNodeInfo {
  let symb: Symbol;
  const symbolOptions = { size: options.symbolSize };
  if (options.symbolGenerator) {
    symb = options.symbolGenerator(basicUnitNode.unit.sidc, symbolOptions);
  } else {
    symb = new Symbol(
      basicUnitNode.unit.sidc,
      symbolOptions,
      // {uniqueDesignation: node.shortName || node.name},
    );
  }
  let unitNodeInfo = basicUnitNode as UnitNodeInfo;
  unitNodeInfo.symbolBoxSize = symb.getSize();
  unitNodeInfo.anchor = symb.getAnchor();
  unitNodeInfo.octagonAnchor = symb.getOctagonAnchor();
  unitNodeInfo.symb = symb;
  unitNodeInfo.x = 0;
  unitNodeInfo.y = 0;
  unitNodeInfo.lx = 0;
  unitNodeInfo.rx = 0;
  unitNodeInfo.ly = 0;

  return unitNodeInfo;
}

function putGroupAt(g: GElementSelection, node: UnitNodeInfo, x: number, y: number, debug = false) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return g.attr("transform", `translate(${dx}, ${dy})`);
}

function createGroupElement(parentElement, className: string, id = ""): GElementSelection {
  let el = parentElement.append("g")
    .attr("class", className);
  if (id) {
    el.attr("id", id);
  }
  return el;
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

export function isTreeLayout(layout: LevelLayout) {
  return layout === LevelLayout.TreeRight || layout === LevelLayout.TreeLeft || layout === LevelLayout.Tree;
}

export function isStackedTreeLayout(layout: LevelLayout) {
  return layout === LevelLayout.TreeRight ||
    layout === LevelLayout.TreeLeft ||
    layout === LevelLayout.Tree ||
    layout === LevelLayout.Stacked;
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
  groupedLevels: BasicUnitNode[][][] = [];
  svg!: SVGElementSelection;
  renderedChart!: RenderedChart;

  constructor(private rootNode: Unit, options: Partial<OrbChartOptions> = {}, private specificOptions: SpecificOptions={}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    if (rootNode) this._computeOrbatInfo(rootNode);
  }

  cleanup() {
    // Remove event listeners
    if (this.svg) {
      this.svg.selectAll("g.o-unit").on("click", null);
      this._removeSelectEventListeners();
    }
  }

  private _removeSelectEventListeners() {
    this.svg.selectAll(".select-rect").on("click", null);
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
    this.renderedChart = renderedChart;
    return this.svg.node() as Element;
  }

  highlightLevel(levelNumber: number) {
    let layer = select("#o-highlight-layer");
    let groupElement = select(`#o-level-${levelNumber}`) as GElementSelection;
    const bbox = groupElement.node()!.getBBox();
    let offset = 20;
    let tmp = layer.append("rect")
      .attr("x", bbox.x - offset * 2)
      .attr("y", bbox.y - offset)
      .attr("width", bbox.width + 4 * offset)
      .attr("height", bbox.height + 2 * offset)
      .attr("class", "highlight select-rect");

    if (this.options.onLevelClick) {
      tmp.on("click", (e) => {
        this.options.onLevelClick(levelNumber);
      });
    }
  }

  highlightGroup(renderedLevelGroup: RenderedLevelGroup) {
    let layer = select("#o-highlight-layer");
    let groupElement = renderedLevelGroup.groupElement;
    const bbox = groupElement.node()!.getBBox();
    let offset = 10;
    let tmp = layer.append("rect")
      .attr("x", bbox.x - offset * 2)
      .attr("y", bbox.y - offset)
      .attr("width", bbox.width + 4 * offset)
      .attr("height", bbox.height + 2 * offset)
      .attr("class", "highlight select-rect");
    if (this.options.onLevelGroupClick) {
      tmp.on("click", (e) => {
        this.options.onLevelGroupClick(renderedLevelGroup.units[0].parent!.unit.id || 0);
      });
    }
  }

  private _createSvgElement(parentElement: HTMLElement): RenderedChart {
    parentElement.innerHTML = "";
    const svg = select(parentElement).append<SVGElement>("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .attr("class", "orbat-chart");

    svg.append("style").text(createChartStyle(this.options));
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
    createGroupElement(svg, "", "o-highlight-layer");
    this.svg = svg;
    return { groupElement: <unknown>svg as GElementSelection, levels: [] }
  }

  private _computeOrbatInfo(rootNode: Unit) {
    let levels: BasicUnitNode[][] = [];
    const nodeMap = {};

    walkTree(rootNode, (unit, levelIdx, parent) => {
      const unitNodeInfo: BasicUnitNode = { unit };
      const currentLevel = levels[levelIdx] || [];
      if (parent) {
        unitNodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = unitNodeInfo;
      currentLevel.push(unitNodeInfo);
      levels[levelIdx] = currentLevel;
    });

    this.groupedLevels = _groupLevelsByParent();

    function _groupLevelsByParent(): BasicUnitNode[][][] {
      let groupedLevels: BasicUnitNode[][][] = [];
      levels.forEach((level, yIdx) => {
        let groupedLevel = level.reduce((accumulator: BasicUnitNode[][], currentValue, currentIndex, array) => {
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

  private _createInitialNodeStructure(parentElement: SVGElementSelection, groupedLevels: BasicUnitNode[][][]): RenderedLevel[] {
    const options = this.options;
    let renderedLevels: RenderedLevel[] = [];
    for (const [yIdx, currentLevel] of groupedLevels.entries()) {
      if (options.maxLevels && yIdx >= options.maxLevels) break;
      let levelSpecificOptions = {};
      if (this.specificOptions.level && this.specificOptions.level[yIdx]) {
        levelSpecificOptions = this.specificOptions.level[yIdx] || {};
      }
      let levelGElement = createGroupElement(parentElement, "o-level", `o-level-${yIdx}`);

      let renderedLevel: RenderedLevel = {
        groupElement: levelGElement, unitGroups: [], options: levelSpecificOptions
      };

      renderedLevels.push(renderedLevel);
      let levelOptions = { ...options, ...levelSpecificOptions };

      currentLevel.forEach((unitLevelGroup, groupIdx) => {
        let parent = unitLevelGroup[0].parent;
        let lgSpecificOptions = {};
        if (parent && this.specificOptions && this.specificOptions.levelGroup) {
          lgSpecificOptions = this.specificOptions.levelGroup[parent.unit.id] || {};
        }
        let levelGroupOptions = { ...levelOptions, ...lgSpecificOptions };
        let levelGroupId = `o-level-group-${parent ? parent.unit.id : 0}`;
        let levelGroupGElement = createGroupElement(levelGElement, "o-level-group", levelGroupId);
        const units = unitLevelGroup.map(unitNode => {
          let unitSpecificOptions = this.specificOptions && this.specificOptions.unit ? this.specificOptions.unit[unitNode.unit.id] || {} : {};
          let unitOptions = { ...levelGroupOptions, ...unitSpecificOptions };
          let renderedUnitNode = createUnitGroup(levelGroupGElement, convertBasicUnitNode2UnitNodeInfo(unitNode, unitOptions), unitOptions);
          renderedUnitNode.options = unitSpecificOptions;
          return renderedUnitNode;
        });
        renderedLevel.unitGroups.push({ groupElement: levelGroupGElement, units, options: lgSpecificOptions });
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
    const levelOptions = { ...this.options, ...renderedLevel.options };
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
      case LevelLayout.Tree:
        _doTreeLayout();
        break;
      case LevelLayout.Stacked:
      case LevelLayout.TreeRight:
      case LevelLayout.TreeLeft:
        _doStackedLayout(levelLayout);
        break;
      default:
        console.warn("Unhandled layout", levelLayout);
    }

    if (levelOptions.debug) drawDebugRect(renderedLevel.groupElement);

    function _doHorizontalLayout() {
      let xIdx = 0;
      let prevX = -padding / 2;

      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let levelGroupOptions = { ...levelOptions, ...unitLevelGroup.options };
        for (const unitNode of unitLevelGroup.units) {
          let x;
          let unitOptions = { ...levelGroupOptions, ...unitNode.options };
          if (unitOptions.unitLevelDistance == UnitLevelDistance.EqualPadding) {
            x = prevX + unitNode.boundingBox.width / 2 + padding;
          } else {
            x = ((xIdx + 1) * chartWidth) / (numberOfUnitsOnLevel + 1);
          }

          unitNode.x = x;
          unitNode.y = y;
          calculateAnchorPoints(unitNode);

          prevX = unitNode.x + unitNode.boundingBox.width / 2;
          putGroupAt(unitNode.groupElement, unitNode, x, y, unitOptions.debug);

          if (unitOptions.debug) drawDebugAnchors(svg, unitNode);
          xIdx += 1;
        }
        if (levelGroupOptions.debug) drawDebugRect(unitLevelGroup.groupElement, "yellow");
      });
    }

    function _doTreeLayout() {
      const groupsOnLevel = renderedLevel.unitGroups.length;
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let levelGroupOptions = { ...levelOptions, ...unitLevelGroup.options };
        let prevY = y;
        for (const [yIdx, unitNode] of unitLevelGroup.units.entries()) {
          let unitOptions = { ...levelGroupOptions, ...unitNode.options };
          let x = unitNode.parent ? unitNode.parent.x : ((groupIdx + 1) * chartWidth) / (groupsOnLevel + 1);

          if (yIdx % 2) {
            x += unitOptions.treeOffset;
          } else {
            x -= unitOptions.treeOffset;
          }
          const ny = prevY;
          unitNode.x = x;
          unitNode.y = ny;
          calculateAnchorPoints(unitNode);

          if (yIdx % 2) prevY = unitNode.ly + unitOptions.stackedOffset;

          putGroupAt(unitNode.groupElement, unitNode, x, ny, unitOptions.debug);
          if (unitOptions.debug) drawDebugAnchors(svg, unitNode)
        }
        if (levelGroupOptions.debug) drawDebugRect(unitLevelGroup.groupElement, "yellow");
      });
    }

    function _doStackedLayout(layout: LevelLayout) {
      const groupsOnLevel = renderedLevel.unitGroups.length;
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let levelGroupOptions = { ...levelOptions, ...unitLevelGroup.options };
        let prevY = y;
        for (const [yIdx, unitNode] of unitLevelGroup.units.entries()) {
          let unitOptions = { ...levelGroupOptions, ...unitNode.options };
          let x = unitNode.parent ? unitNode.parent.x : ((groupIdx + 1) * chartWidth) / (groupsOnLevel + 1);

          if (layout === LevelLayout.TreeRight) {
            x += unitOptions.treeOffset;
          } else if (layout === LevelLayout.TreeLeft) {
            x -= unitOptions.treeOffset;
          }
          const ny = prevY;
          unitNode.x = x;
          unitNode.y = ny;
          calculateAnchorPoints(unitNode);

          prevY = unitNode.ly + unitOptions.stackedOffset;
          putGroupAt(unitNode.groupElement, unitNode, x, ny, unitOptions.debug);
          if (unitOptions.debug) drawDebugAnchors(svg, unitNode)
        }
        if (levelGroupOptions.debug) drawDebugRect(unitLevelGroup.groupElement, "yellow");
      });
    }
  }

  private _drawConnectors(renderedChart: RenderedChart) {
    const nLevels = this.options.maxLevels || renderedChart.levels.length;
    renderedChart.levels.forEach((renderedLevel, yIdx) => {
      let levelOptions = { ...this.options, ...renderedLevel.options };
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        let currentLevelLayout = yIdx === nLevels - 1 ? this.options.lastLevelLayout : LevelLayout.Horizontal;
        let levelGroupOptions = { ...levelOptions, ...unitLevelGroup.options };
        unitLevelGroup.units.forEach((unitNode, idx) => {
          let unitOptions = { ...levelGroupOptions, ...unitNode.options };
          if (currentLevelLayout === LevelLayout.Stacked && idx > 0) return;
          if (isLeftRightLayout(currentLevelLayout)) return;
          if (currentLevelLayout === LevelLayout.Tree) return;
          this._drawUnitLevelGroupConnectorPath(unitNode, unitOptions);
        });
        switch (currentLevelLayout) {
          case LevelLayout.TreeRight:
          case LevelLayout.TreeLeft:
          case LevelLayout.Tree:
            this._drawUnitLevelGroupTreeLeftRightConnectorPath(unitLevelGroup.units, currentLevelLayout, levelGroupOptions);
            break;
          default:
            this._drawUnitLevelConnectorPath(unitLevelGroup.units, levelGroupOptions);
        }
      });
    });
  }

  private _drawUnitLevelGroupConnectorPath(unit: UnitNodeInfo, options) {
    const { x, y } = unit;
    if (unit.parent) {
      const dy = y - ((y - unit.parent.y) / 2);
      const d = `M ${x}, ${y - unit.octagonAnchor.y - options.connectorOffset} V ${dy}`;
      this.svg.append("path")
        .attr("d", d)
        .classed("o-line", true);
    }
  }

  private _drawUnitLevelConnectorPath(unitLevelGroup: RenderedUnitNode[], options: OrbChartOptions) {
    let firstUnitInGroup = unitLevelGroup[0];
    let svg = this.svg;
    let parentUnit = firstUnitInGroup.parent;
    if (!parentUnit) return;
    let lastUnitInGroup = unitLevelGroup[unitLevelGroup.length - 1];

    const dy = firstUnitInGroup.y - ((firstUnitInGroup.y - parentUnit.y) / 2);
    const d1 = `M ${parentUnit.x}, ${parentUnit.ly + options.connectorOffset} V ${dy}`;
    svg.append("path")
      .attr("d", d1)
      .classed("o-line", true);
    const d = `M ${firstUnitInGroup.x}, ${dy} H ${lastUnitInGroup.x}`;
    svg.append("path")
      .attr("d", d)
      .classed("o-line", true);
  }

  private _drawUnitLevelGroupTreeLeftRightConnectorPath(unitLevelGroup: RenderedUnitNode[], levelLayout: LevelLayout, options: OrbChartOptions) {
    let svg = this.svg;
    let lastUnitInGroup = unitLevelGroup[unitLevelGroup.length - 1];
    let parentUnit = lastUnitInGroup.parent as RenderedUnitNode;
    if (!parentUnit) return;

    const d1 = `M ${parentUnit.x}, ${parentUnit.ly + options.connectorOffset} V ${lastUnitInGroup.y}`;
    svg.append("path")
      .attr("d", d1)
      .classed("o-line", true);

    // find the widest node
    let maxWidth = Math.max(...unitLevelGroup.map(u => u.boundingBox.width));
    for (const [yIdx, unit] of unitLevelGroup.entries()) {
      let d1;
      const delta = Math.abs(unit.boundingBox.width / 2 - maxWidth / 2);
      if (levelLayout === LevelLayout.TreeRight || levelLayout === LevelLayout.Tree && yIdx % 2)
        d1 = `M ${unit.lx - delta - options.connectorOffset}, ${unit.y}  H ${parentUnit.x}`;
      else
        d1 = `M ${unit.rx + delta + options.connectorOffset}, ${unit.y}  H ${parentUnit.x}`;
      svg.append("path")
        .attr("d", d1)
        .classed("o-line", true);
    }
  }

  public makeInteractive() {
    this._addSelectionLayer(this.renderedChart);
  }

  private _addSelectionLayer(renderedChart: RenderedChart) {
    renderedChart.levels.forEach((level, index) => {
      this.highlightLevel(index);
      level.unitGroups.forEach(levelGroup => {
        this.highlightGroup(levelGroup);
      })
    })
  }

  public removeSelectionLayer() {
    this._removeSelectEventListeners();
    this.svg.selectAll("#o-highlight-layer rect").remove();
  }

  public highlightLevels(levelIndexes: number[]) {
    console.log("Not implemented yet", levelIndexes);
  }
}

export { OrbatChart };
