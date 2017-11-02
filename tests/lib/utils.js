import {getDirection} from "../../lib/utils";

describe("#getDirection", () => {
  context("forward", () => {
    it("returns the provided aspect", () => {
      expect(getDirection("forward", "up")).to.equal("up");
      expect(getDirection("forward", "left")).to.equal("left");
    });
  });

  context("backward", () => {
    it("returns the inverse aspect direction", () => {
      expect(getDirection("backward", "up")).to.equal("down");
      expect(getDirection("backward", "left")).to.equal("right");
    });
  });

  context("standard directions", () => {
    it("return the provided direction", () => {
      expect(getDirection("left", "up")).to.equal("left");
      expect(getDirection("down", "left")).to.equal("down");
    });
  });
});
