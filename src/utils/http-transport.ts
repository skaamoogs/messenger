const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: Record<string, unknown>) {
  if (data && String(data) === "[object Object]") {
    const result = Object.entries(data).reduce(
      (acc, currentValue) => `${acc}${currentValue[0]}=${currentValue[1]}&`,
      "?"
    );
    return result.slice(0, -1);
  }

  return "";

  // Можно делать трансформацию GET-параметров в отдельной функции
}

export default class HTTPTransport {
  get = (url: string, options: Record<string, unknown> = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.GET }, timeout);
  };

  put = (url: string, options: Record<string, unknown> = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.PUT }, timeout);
  };

  post = (url: string, options: Record<string, unknown> = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.POST }, timeout);
  };

  delete = (url: string, options: Record<string, unknown> = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.DELETE }, timeout);
  };

  request = (url: string, options: Record<string, unknown>, timeout = 5000) => {
    const headers = options.headers as Record<string, string>;
    const data = options.data as Record<string, string>;
    const method = options.method as string;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === METHODS.GET && data) {
        xhr.open(method, url + queryStringify(data));
      } else {
        xhr.open(method, url);
      }

      if (headers && String(headers) === "[object Object]") {
        Object.entries(headers).forEach(([key, value]) =>
          xhr.setRequestHeader(key, value)
        );
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      setTimeout(
        () => reject(new Error("Превышено время ожидани ответа")),
        timeout
      );

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
