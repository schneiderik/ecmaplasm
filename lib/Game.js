import GameMap from "./GameMap";

class Game {
  constructor(options={}) {
    this.options = options;
    this.gameMap = new GameMap(options.textMap || "");
  }

  toString() {
    return `This is Ecmaplasm.\n\n${this.gameMap.toString()}`
  }
}

export default Game;
