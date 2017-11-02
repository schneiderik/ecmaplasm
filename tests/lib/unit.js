import Unit from "../../lib/unit";

describe("Unit", () => {
  describe("#walk", () => {
    context("up", () => {
      it("increments the unit's y location by 1", () => {
        const unit = new Unit();

        unit.walk("up")

        expect(unit.state.location.y).to.equal(1);
      });
    });

    context("down", () => {
      it("decrements the unit's y location by 1", () => {
        const unit = new Unit();

        unit.walk("down")

        expect(unit.state.location.y).to.equal(-1);
      });
    });

    context("right", () => {
      it("increments the unit's x location by 1", () => {
        const unit = new Unit();

        unit.walk("right")

        expect(unit.state.location.x).to.equal(1);
      });
    });

    context("left", () => {
      it("decrements the unit's x location by 1", () => {
        const unit = new Unit();

        unit.walk("left")

        expect(unit.state.location.x).to.equal(-1);
      });
    });
  });
});
