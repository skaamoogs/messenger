/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { expect } from "chai";
import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from "sinon";
import HTTPTransport, { Method } from "./http-transport";

describe("HTTPTransport", () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport("/auth");
  });

  afterEach(() => {
    requests.length = 0;
  });

  it("get() should send GET request", () => {
    instance.get("/user");

    const [request] = requests;

    expect(request.method).to.eq(Method.Get);
  });
});
