import { expect } from "chai";
import sinon from "sinon";
import { BlockClass } from "./route";
import router from "./router";

describe("Router", () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === "function") {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  global.window.history.forward = () => {
    if (typeof window.onpopstate === "function") {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  const getContentFake = sinon.fake.returns(document.createElement("div"));

  const BlockMock = class {
    getContent = getContentFake;
    dispatchComponentDidMount = () => {};
  } as unknown as BlockClass;

  it("use() should return Router instance", () => {
    const result = router.use("/", BlockMock);

    expect(result).to.eq(router);
  });

  it("back() should render a page on history back action", () => {
    router.use("/", BlockMock).start();

    router.back();

    expect(getContentFake.callCount).to.eq(1);
  });

  it("should render a page on start", () => {
    router.use("/", BlockMock).start();

    expect(getContentFake.callCount).to.eq(1);
  });
});
