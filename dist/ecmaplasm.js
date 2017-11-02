/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Tile);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_map_txt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_map_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_map_txt__);



const game = new __WEBPACK_IMPORTED_MODULE_0__lib_Game__["a" /* default */]({textMap: __WEBPACK_IMPORTED_MODULE_1__lib_map_txt___default.a});

console.log(game.toString());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameMap__ = __webpack_require__(3);


class Game {
  constructor(options={}) {
    this.options = options;
    this.gameMap = new __WEBPACK_IMPORTED_MODULE_0__GameMap__["a" /* default */](options.textMap || "");
  }

  toString() {
    return `This is Ecmaplasm.\n\n${this.gameMap.toString()}`
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tile__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WallTile__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Player__ = __webpack_require__(6);




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
      tile = new __WEBPACK_IMPORTED_MODULE_1__WallTile__["a" /* default */](this, x, y);
    } else if (char === `i`) {
      const player = new __WEBPACK_IMPORTED_MODULE_2__Player__["a" /* default */](this, x, y);
      tile = new __WEBPACK_IMPORTED_MODULE_0__Tile__["a" /* default */](this, x, y, {
        content: player
      });
    } else {
      tile = new __WEBPACK_IMPORTED_MODULE_0__Tile__["a" /* default */](this, x, y);
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

/* harmony default export */ __webpack_exports__["a"] = (GameMap);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tile__ = __webpack_require__(0);


const isWallTile = (tile) =>
  tile.constructor.name === "WallTile";

class WallTile extends __WEBPACK_IMPORTED_MODULE_0__Tile__["a" /* default */] {
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

/* harmony default export */ __webpack_exports__["a"] = (WallTile);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "-------\n|     |\n|     |\n|     |\n|     |\n--- ---\n  | |\n  | |\n  | |\n  | |\n -- --\n | i |\n -----\n"

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Player {
  getTextAlias() {
    return `i`;
  }

  toString() {
    return this.getTextAlias();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ })
/******/ ]);