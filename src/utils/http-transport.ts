import { queryStringify } from "./helpers";
import { HTTPMethod, Indexed } from "./types";

export enum Method {
  Get = "Get",
  Post = "Post",
  Put = "Put",
  Delete = "Delete",
}

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
      { ...options, method: Method.Get },
      timeout
    );
  };

  put: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: Method.Put },
      timeout
    );
  };

  post: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: Method.Post },
      timeout
    );
  };

  delete: HTTPMethod = (url, options = {}) => {
    const timeout = options.timeout as number;
    const requestUrl = this._endpoint + url;
    return this.request(
      requestUrl,
      { ...options, method: Method.Delete },
      timeout
    );
  };

  request<Response>(
    url: string,
    options: Record<string, unknown>,
    timeout = 5000
  ): Promise<Response> {
    const headers = options.headers as Record<string, string>;
    const data = options.data as Indexed | FormData;
    const method = options.method as string;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === Method.Get && data) {
        xhr.open(method, url + queryStringify(data as Indexed));
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

      if (method === Method.Get || !data) {
        xhr.send();
      } else if (options.dataType === "formData") {
        xhr.send(data as FormData);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
