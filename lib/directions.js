import {
  RELATIVE_DIRECTION_ALIASES,
  RELATIVE_DIRECTIONS,
  VALID_DIRECTIONS
} from "./constants";

class Direction {
  constructor(name) {
    this.name = name;
    this.aliases = RELATIVE_DIRECTION_ALIASES[this.name]
  }

  forward() {
    return directions[this.aliases.forward];
  }

  backward() {
    return directions[this.aliases.backward];
  }

  left() {
    return directions[this.aliases.left];
  }

  right() {
    return directions[this.aliases.right];
  }

  change(name) {
    this.hasOwnProperty[name]
      ? this[name]()
      : directions[name];
  }
}

const directions = {
  north: new Direction("north");
  east: new Direction("east");
  south: new Direction("south");
  west: new Direction("west");
};

export default directions;
