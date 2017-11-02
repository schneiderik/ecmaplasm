import {CARDINAL_DIRECTIONS, RELATIVE_DIRECTIONS} from "./constants";

export default {
  direction: {
    toCardinalDirection: (direction, aspect) => {
      if (!VALID_DIRECTION.include(direction)) {
        log.error(`"${direction}" is not a valid direction`);
      }

      return RELATIVE_DIRECTIONS.includes(direction)
        ? CARDINAL_DIRECTIONS[aspect][direction]
        : direction;
    }
  }
};
