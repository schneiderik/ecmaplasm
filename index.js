import Game from "./lib/Game";
import textMap from "./lib/map.txt";

const game = new Game({textMap});

console.log(game.toString());
