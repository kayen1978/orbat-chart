import { Unit, UnitNodeVisitorCallback } from "./types";

export function walkTree(root: Unit, callback: UnitNodeVisitorCallback) {
  let level = 0;

  function helper(currentUnit: Unit, parent: Unit|null) {
    callback(currentUnit, level, parent);
    if (currentUnit.subUnits) {
      level += 1;
      for (const subUnit of currentUnit.subUnits) {
        helper(subUnit, currentUnit);
      }
      level -= 1;
    }
  }

  helper(root, null);
}

export function createElement(elementName) {
  return document.createElementNS('http://www.w3.org/2000/svg', elementName);
}

export function flattenArray<T>(array: any[]): T[] {
  return ([] as T[]).concat(...array);
  // return array.reduce((acc, val) => acc.concat(val), []);
}
