'use strict';

import { Game } from "./interfaces/game.js";
import { Stage1 } from "./stages/stage1.js";

export class BreakoutGame extends Game {
    canvas;
    ctx;
    currentStage;
    score;
    lives;
    constructor() {
        super();
    }

    start(params) {
        // Attach to canvas
        this.canvas = document.getElementById(params.canvasId);
        this.ctx = this.canvas.getContext('2d');

        // Add input listeners
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            var code = event.code;
            // Alert the key name and key code on keydown
            //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
            this.receivedInput(name);
        }, false);

        document.addEventListener('keyup', (event) => {
            var name = event.key;
            var code = event.code;
            // Alert the key name and key code on keydown
            // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
            this.receivedInput(null);
        }, false);

        // Todo: add some sort of menu selection screen

        // Init Stage
        this.currentStage = new Stage1(this);
        this.lives = 3;
        this.score = 0;

        // Start Loop
        let self = this;
        window.requestAnimationFrame((t) => self.gameLoop(t));
    }

    receivedInput(key) {
        this.currentStage.receiveInput(key);
    }

    changeLife(addLife) {
        this.lives += addLife;
    }

    changeScore(addScore) {
        this.score += addScore;
    }

    gameLoop(timestamp) {
        // console.log("Game Loop Tick: " + timestamp);
        this.performLogic(timestamp);
        this.renderScene(timestamp);
        let self = this;
        window.requestAnimationFrame((t) => self.gameLoop(t));
    }

    performLogic(timestamp) {
        this.currentStage.tickStage(timestamp);
    }

    renderScene(timestamp) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.currentStage.renderStage(this.ctx);
    }

    end() {
        this.currentStage = null;
        return {};
    }
}