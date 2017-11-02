class Tile {
  constructor(map, positionX, positionY, options={}) {
    this.options = options;
    this.content = this.options.content;
    this.map = map;
    this.position = {
      x: positionX,
      y: positionY
    }
  }

  getTextAlias() {
    return ` `;
  }

  toString() {
    return this.content ? this.content.toString() : this.getTextAlias();
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
