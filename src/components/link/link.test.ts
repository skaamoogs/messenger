/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { expect } from "chai";
import sinon from "sinon";
import router from "../../utils/route/router";
import Link from "./link";

describe("Link", () => {
  let mockObj: any;
  beforeEach(() => {
    mockObj = sinon.stub(router, "go");
  });

  afterEach(() => {
    mockObj.restore();
  });

  it("should call router.go on click", () => {
    const route = "/abc";
    const link = new Link({
      text: "Click me",
      route,
    });
    const { element } = link;

    element?.click();

    expect(mockObj.callCount).to.eq(1);
  });

  it("should go to passed route on click", () => {
    const route = "/abc";
    const link = new Link({
      text: "Click me",
      route,
    });
    const { element } = link;

    element?.click();

    expect(mockObj.args[0][0]).to.eq(route);
  });
});
