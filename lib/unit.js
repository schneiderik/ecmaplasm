import directions from "./directions";

class Unit {
  static defaultProps = {
    pivotDirection: directions.south,
    position: new Position(0, 0)
    spaces:
  };

  constructor(props={}) {
    this.props = Object.assign({}, this.defaultProps, props);
  }

  walk(directionName="forward") {
    const {position, pivotDirection, id} = this.props;

    const walkDirection = pivotDirection[directionName];

    space.getAdjacentSpace

    const space = getSpace(targetLocation);

    if (targetSpace.isEmpty())
      game.get(
      gameState.units[id].location = targetLocation;
    }
  }
}

export default Unit;
