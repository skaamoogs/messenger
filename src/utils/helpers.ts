import Block from "../modules/block";
import { Indexed } from "./types";

export const checkVal = (val: unknown) =>
  Object.prototype.toString.call(val).split(" ")[1].slice(0, -1).toLowerCase();

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const result: Indexed = {};
  Object.keys(lhs).forEach((k) => {
    if (k in rhs) {
      if (checkVal(rhs[k]) !== "object") {
        result[k] = rhs[k];
      } else if (checkVal(lhs[k]) !== "object") {
        result[k] = rhs[k];
      } else {
        const targetObj = lhs[k] as Indexed;
        const sourceObj = rhs[k] as Indexed;
        result[k] = merge(targetObj, sourceObj);
      }
    } else {
      result[k] = lhs[k];
    }
  });
  Object.keys(rhs).forEach((k) => {
    if (!Object.prototype.hasOwnProperty.call(lhs, k)) {
      result[k] = rhs[k];
    }
  });

  return result;
}

export function isEqual(a: unknown, b: unknown): boolean {
  let result = true;
  function compare(c: unknown, d: unknown) {
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
        if (
          Object.keys(c as object).length !== Object.keys(d as object).length
        ) {
          return false;
        }
        Object.keys(c as object).forEach((key) => {
          if (c instanceof Object && d instanceof Object) {
            result = compare(<object>c[key], d[key]);
          }
        });
        break;
      default:
        return false;
    }
    return result;
  }
  return compare(a, b);
}

export function set(
  object: Indexed | unknown,
  path: unknown,
  value: unknown
): Indexed | unknown {
  if (typeof path !== "string") {
    throw new Error("path must be string");
  }
  if (checkVal(object) !== "object") {
    return object;
  }
  const props = path.split(".");
  const newObj = merge(
    object as Indexed,
    props.reduceRight((acc, cv) => ({ [cv]: acc }), value) as Indexed
  );
  Object.assign(object as Indexed, newObj);
  return object;
}

export function queryStringify(data: Indexed): string | never {
  if (checkVal(data) !== "object") {
    throw new Error("input must be an object");
  }

  function queryArray(key: string, value: unknown) {
    let arr: unknown[] = [];
    if (checkVal(value) !== "array" && checkVal(value) !== "object") {
      return [key, value];
    }
    Object.entries(value as object).forEach(([k, v]) => {
      arr = arr.concat(queryArray(`${key}[${k}]`, v));
    });
    return arr;
  }

  let resultArr: unknown[] = [];
  Object.entries(data).forEach(([k, v]) => {
    if (checkVal(v) !== "array" && checkVal(v) !== "object") {
      resultArr.push(k, v);
    } else {
      resultArr = resultArr.concat(queryArray(k, v));
    }
  });
  const keys = resultArr.filter((_, index) => index % 2 === 0);
  const values = resultArr.filter((_, index) => index % 2 !== 0);
  let result = "";
  for (let i = 0; i < keys.length; i++) {
    result += `${keys[i]}=${values[i]}&`;
  }
  return result.slice(0, -1);
}

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  const content = block.getContent();
  if (root && content) {
    root.innerHTML = "";
    root.appendChild(content);
  }

  block.dispatchComponentDidMount();

  return root;
}
