import { Symbol } from "milsymbol";
import { select } from "d3-selection";
import { flattenArray, walkTree } from "./utils";
import {
  ChartOrientation,
  GElementSelection,
  OrbChartOptions,
  Point,
  RenderedChart,
  RenderedLevel,
  RenderedUnitNode,
  Size,
  SVGElementSelection,
  Unit,
  UnitLevelDistance,
  UnitNodeInfo
} from "./types";

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

export const DEFAULT_OPTIONS = {
  symbolSize: 32,
  maxLevels: 0,
  debug: false,
  connectorOffset: 5,
  orientation: ChartOrientation.Top,
  unitLevelDistance: UnitLevelDistance.Fixed,
} as OrbChartOptions;

export const DEFAULT_CHART_WIDTH = 600;
export const DEFAULT_CHART_HEIGHT = 600;

function arrSum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

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
    symbolBoxSize: size, anchor, octagonAnchor, symb, unit: unit, x: 0, y: 0, ly: 0
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
    const svg = select(parentElement).append<SVGElement>("svg");
    svg.attr("viewBox", `0 0 ${this.width} ${this.height}`);
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
    const chartHeight = this.height;
    renderedChart.levels.forEach((renderedLevel, yIdx) => {
      // if (options.orientation === ChartOrientation.Bottom)
      const y = chartHeight * ((yIdx + 1) / (numberOfLevels + 1));
      this._renderLevel(renderedLevel, y)
    });
  }

  private _renderLevel(renderedLevel: RenderedLevel, y: number) {
    const options = this.options;
    const chartWidth = this.width;
    const renderGroups = renderedLevel.unitGroups;
    const unitsOnLevel = flattenArray<RenderedUnitNode>(renderGroups.map(unitGroup => unitGroup.units));
    const numberOfUnitsOnLevel = unitsOnLevel.length;
    const totalWidth = arrSum(unitsOnLevel.map(u => u.boundingBox.width));

    const availableSpace = chartWidth - totalWidth;
    const padding = availableSpace / numberOfUnitsOnLevel;

    let xIdx = 0;
    let prevX = -padding / 2;

    renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
      let levelGroupGElement = unitLevelGroup.groupElement;

      for (const unitNode of unitLevelGroup.units) {
        let x;
        if (options.unitLevelDistance == UnitLevelDistance.EqualPadding) {
          x = prevX + unitNode.boundingBox.width / 2 + padding;
        } else {
          x = ((xIdx + 1) * chartWidth) / (numberOfUnitsOnLevel + 1);
        }

        unitNode.x = x;
        unitNode.y = y;
        unitNode.ly = y + (unitNode.boundingBox.height - unitNode.octagonAnchor.y);
        prevX = unitNode.x + unitNode.boundingBox.width / 2;

        putGroupAt(unitNode.groupElement, unitNode, x, y, options.debug);
        if (options.debug) {
          drawDebugPoint(this.svg, x, y);
          drawDebugPoint(this.svg, x, unitNode.ly);
        }

        xIdx += 1;
      }
      if (options.debug) drawDebugRect(levelGroupGElement, "yellow");
    });
    if (options.debug) drawDebugRect(renderedLevel.groupElement);
  }

  private _drawConnectors(renderedChart: RenderedChart) {
    renderedChart.levels.forEach((renderedLevel, yIdx) => {
      renderedLevel.unitGroups.forEach((unitLevelGroup, groupIdx) => {
        unitLevelGroup.units.forEach(unitNode => {
          this._drawUnitLevelGroupConnectorPath(unitNode);
        });
        this._drawUnitLevelConnectorPath(unitLevelGroup.units);
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
}

export { OrbatChart };
