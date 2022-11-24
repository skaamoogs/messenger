/* eslint-disable @typescript-eslint/no-explicit-any */
const checkVal = (val: any) =>
  Object.prototype.toString.call(val).split(" ")[1].slice(0, -1).toLowerCase();

function isEqual<T>(a: T, b: T) {
  let result = true;
  function compare(c: any, d: any) {
    const typeC = checkVal(c);
    const typeD = checkVal(d);
    if (typeC !== typeD) return false;
    switch (typeC) {
      case "number":
      case "string":
      case "symbol":
      case "null":
      case "undefined":
        if (c !== d) {
          result = false;
        }
        break;
      case "object":
      case "array":
      case "map":
      case "set":
        Object.keys(c).forEach((key) => {
          result = compare(c[key], d[key]);
        });
        break;
      default:
        break;
    }
    return result;
  }
  return compare(a, b);
}

export default isEqual;
