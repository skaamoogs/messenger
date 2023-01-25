/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-extraneous-dependencies */
import sinon from "sinon";
import proxyquire from "proxyquire";
import { expect } from "chai";
import type BlockType from "./block";

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: Block } = proxyquire("./block", {
  "../utils/event-bus": {
    default: class {
      emit = eventBusMock.emit;

      on = eventBusMock.on;
    },
  },
}) as { default: typeof BlockType };

describe("Block", () => {
  class ComponentMock extends Block {}

  it("should fire init event on initialization", () => {
    // eslint-disable-next-line no-new
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith("init")).to.eq(true);
  });
});
