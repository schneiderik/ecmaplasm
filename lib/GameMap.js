import Tile from "./Tile";
import WallTile from "./WallTile";

class GameMap {
  constructor(textMap) {
    this.textMap = textMap;
    this.tiles = [];

    if (this.textMap) {
      this.tiles = this.generateTilesFromText();
    }
  }

  generateTilesFromText() {
    const rows = this.textMap.split("\n");

    return rows.map((row, y) => {
      const chars = row.split("");

      return chars.map((char, x) => {
        return this.convertCharacterToTile(char, x, y);
      });
    });
  }

  convertCharacterToTile(char, x, y) {
    let tile;

    if (char === `|` || char === `-`) {
      tile = new WallTile(this, x, y);
    } else {
      tile = new Tile(this, x, y);
    }

    return tile;
  }

  getTile(x, y) {
    let tile;

    const row = this.tiles[y];

    if (row) {
      tile = row[x];
    }

    return tile;
  }

  toString() {
    return this.tiles.map(row => {
      return row.map(tile => {
        return tile ? tile.toString() : " ";
      }).join("")
    }).join(`\n`);
  }
}

export default GameMap;
