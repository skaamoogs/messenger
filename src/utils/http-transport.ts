import { queryStringify } from "./helpers";
import { HTTPMethod, Indexed } from "./types";

const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export default class HTTPTransport {
  private _endpoint: string;

  constructor(endpoint: string) {
    this._endpoint = endpoint;
  }

  get: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: METHODS.GET },
      timeout
    );
  };

  put: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: METHODS.PUT },
      timeout
    );
  };

  post: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: METHODS.POST },
      timeout
    );
  };

  delete: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: METHODS.DELETE },
      timeout
    );
  };

  request = (url: string, options: Record<string, unknown>, timeout = 5000) => {
    const headers = options.headers as Record<string, string>;
    const data = options.data as Indexed;
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

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
      setTimeout(
        () => reject(new Error("Превышено время ожидани ответа")),
        timeout
      );

      xhr.onabort = () => reject(new Error("abort"));
      xhr.onerror = () => reject(new Error("network error"));
      xhr.ontimeout = () => reject(new Error("timeout"));

      xhr.responseType = "json";
      xhr.withCredentials = true;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
