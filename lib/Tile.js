class Tile {
  constructor(map, positionX, positionY, options={}) {
    this.options = options;
    this.map = map;
    this.position = {
      x: positionX,
      y: positionY
    }
  }

  toString() {
    return ` `;
  }

  adjacentTiles() {
    return {
      north: this.map.getTile(this.position.x, this.position.y - 1),
      east: this.map.getTile(this.position.x + 1, this.position.y),
      south: this.map.getTile(this.position.x, this.position.y + 1),
      west: this.map.getTile(this.position.x - 1, this.position.y)
    }
  }
}

export default Tile;
