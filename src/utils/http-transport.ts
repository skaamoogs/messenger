const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

function queryStringify(data: Record<string, unknown>) {
  if (data && String(data) === "[object Object]") {
    const result = Object.entries(data).reduce(
      (acc, currentValue) => `${acc}${currentValue[0]}=${currentValue[1]}&`,
      "?"
    );
    return result.slice(0, -1);
  }

  return "";
}

type HTTPMethod = (
  url: string,
  options: Record<string, unknown>
) => Promise<unknown>;

export default class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.GET }, timeout);
  };

  put: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.PUT }, timeout);
  };

  post: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    return this.request(url, { ...options, method: METHODS.POST }, timeout);
  };

  delete: HTTPMethod = (url, options = {}) => {
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
