'use strict';

import { BreakoutGame } from "./breakout-game.js";
import { HitboxShape } from "./objects/collidable.js";

console.log("App.js Start ----");
let game = new BreakoutGame();
game.start({canvasId: "main-canvas", width: 300, height: 400});