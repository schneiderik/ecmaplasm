import Tile from "./Tile";

const isWallTile = (tile) =>
  tile.constructor.name === "WallTile";

class WallTile extends Tile {
	getTextAlias() {
		const {north, east, south, west} = this.adjacentTiles();

		if (this.borderedBy([north, east, south, west])) {
			return `╬`;
		} else if (this.borderedBy([north, east, south])) {
			return `╠`;
		} else if (this.borderedBy([east, south, west])) {
			return `╦`;
		} else if (this.borderedBy([south, west, north])) {
			return `╣`;
		} else if (this.borderedBy([west, north, east])) {
			return `╩`;
		} else if (this.borderedBy([west, north])) {
			return `╝`;
		} else if (this.borderedBy([west, south])) {
			return `╗`;
		} else if (this.borderedBy([east, north])) {
			return `╚`;
		} else if (this.borderedBy([east, south])) {
			return `╔`;
		} else if (this.borderedBy([east]) || this.borderedBy([west])) {
			return `═`;
		} else {
			return `║`;
    }
	}

  borderedBy(tiles) {
    return tiles.every(Boolean) && tiles.every(isWallTile);
  }
}

export default WallTile;
