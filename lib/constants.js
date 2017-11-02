const CARDINAL_DIRECTION_ALIASES = {
  north: {
    forward: "north",
    backward: "south",
    left: "west",
    right: "east"
  },
  east: {
    forward: "east",
    backward: "west",
    left: "north",
    right: "south"
  },
  south: {
    forward: "south",
    backward: "north",
    left: "east",
    right: "west"
  },
  west: {
    forward: "west",
    backward: "east",
    left: "south",
    right: "north"
  },
};

const RELATIVE_DIRECTIONS = [
  "forward",
  "right",
  "backward",
  "left"
];

const CARDINAL_DIRECTIONS = Object.keys(CARDINAL_DIRECTION_ALIASES);

const VALID_DIRECTIONS = [...CARDINAL_DIRECTIONS, ...RELATIVE_DIRECTIONS];

export default {
  CARDINAL_DIRECTIONS,
  CARDINAL_DIRECTION_ALIASES,
  RELATIVE_DIRECTIONS,
  VALID_DIRECTIONS
}
