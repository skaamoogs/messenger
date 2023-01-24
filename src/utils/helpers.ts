import { DAYS_NUMBER, MONTHS } from "../const";
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
      case "array":
        if ((c as unknown[]).length !== (d as unknown[]).length) {
          return false;
        }
        (c as unknown[]).forEach((_, index) => {
          result = compare(
            (c as unknown[])[index],
            (d as unknown[])[index]
          );
        });
        break;
      case "object":
        if (
          Object.keys(c as object).length !== Object.keys(d as object).length
        ) {
          return false;
        }
        Object.keys(c as object).forEach((key) => {
          result = compare((c as Indexed)[key], (d as Indexed)[key]);
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

export function isLeapYear(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function parseTime(time: string) {
  const hours = Number(time.slice(11, 13));
  const minutes = Number(time.slice(14, 16));
  let year = Number(time.slice(0, 4));
  let month = Number(time.slice(5, 7));
  let day = Number(time.slice(8, 10));
  const maxDays = month === 2 && isLeapYear(year) ? 29 : DAYS_NUMBER[month - 1];

  const date = new Date();
  const offset = date.getTimezoneOffset();
  let localHours = hours - Math.floor(offset / 60);
  let localMinutes = minutes - (offset % 60);
  if (localMinutes < 0) {
    localHours--;
    localMinutes += 60;
  }
  if (localMinutes >= 60) {
    localHours++;
    localMinutes -= 60;
  }
  if (localHours < 0) {
    day--;
    localHours += 24;
  }
  if (localHours >= 24) {
    day++;
    localHours -= 24;
  }
  if (day < 1) {
    month--;
    day += maxDays;
  }
  if (day > maxDays) {
    month++;
    day -= maxDays;
  }
  if (month < 1) {
    year--;
    month += 12;
  }
  if (month > 12) {
    year++;
    month -= 12;
  }

  return { year, month, day, localHours, localMinutes };
}

export function getTimeForChat(time: string) {
  if (!time) {
    return;
  }
  const { year, month, day, localHours, localMinutes } = parseTime(time);
  const date = new Date();
  let hours = localHours.toString();
  let minutes = localMinutes.toString();
  if (localHours < 10) {
    hours = `0${hours}`;
  }
  if (localMinutes < 10) {
    minutes = `0${minutes}`;
  }
  if (date.getFullYear() === year) {
    if (date.getMonth() + 1 === month) {
      if (date.getDate() === day) {
        return `${hours}:${minutes}`;
      }
    }
    return `${day} ${MONTHS[month - 1]}`;
  }
  return `${day} ${MONTHS[month]} ${year}`;
}

export function getTimeForMessenger(time: string) {
  const { year, month, day, localHours, localMinutes } = parseTime(time);

  let hours = localHours.toString();
  let minutes = localMinutes.toString();
  if (localHours < 10) {
    hours = `0${hours}`;
  }
  if (localMinutes < 10) {
    minutes = `0${minutes}`;
  }

  const messageTime = `${hours}:${minutes}`;

  let messageDate = "";
  const date = new Date();
  if (date.getFullYear() === year) {
    messageDate = `${day} ${MONTHS[month - 1]}`;
  } else {
    messageDate = `${day} ${MONTHS[month]} ${year}`;
  }

  return { date: messageDate, time: messageTime };
}
