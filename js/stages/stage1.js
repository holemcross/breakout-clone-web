'use strict';

import { Stage } from "../interfaces/stage.js";
import { Ball } from "../objects/ball.js";
import { Brick } from "../objects/brick.js";
import { Paddle } from "../objects/paddle.js";

export class Stage1 extends Stage {
    gameDelegate;
    unbreakableBricks;
    bricks;
    balls;
    paddles;
    lastInput;
    movePaddle;
    killZone;
    lastTimestamp;

    static brickHeight = 20;
    static brickWidth = 30
    static ballRadius = 2
    constructor(gameDelegate){
        super();
        this.unbreakableBricks = [];
        this.bricks = [];
        this.balls = [];
        this.paddles = [];
        this.movePaddle = 0;
        this.lastTimestamp = Date.now();
        this.gameDelegate = gameDelegate;

        this.load();
    }

    load(params) {
        //////////////////// {invulnerable: true, color: "gray"}
        // Unbreakable Bricks
        // Top Row
        this.unbreakableBricks.push(new Brick({x:15,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:45,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:75,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:105,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:135,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:165,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:195,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:225,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:255,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:285,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:10}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:30}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:30}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:50}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:50}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:70}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:70}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:90}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:90}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:110}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:110}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:130}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:130}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:150}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:150}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:170}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:170}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:190}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:190}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:210}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:210}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:230}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:230}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:250}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:250}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:270}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:270}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:290}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:290}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:15,y:310}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:310}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        // Bottom Row
        this.unbreakableBricks.push(new Brick({x:15,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:45,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:75,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:105,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:135,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:165,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:195,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:225,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:255,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:285,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));
        this.unbreakableBricks.push(new Brick({x:315,y:330}, Stage1.brickWidth, Stage1.brickHeight, {invulnerable: true, color: "gray"}));

        ////////////////////
        // Regular Bricks
        // Top Row
        this.unbreakableBricks.push(new Brick({x:75,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:105,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:135,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:165,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:195,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:225,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        this.unbreakableBricks.push(new Brick({x:255,y:50}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "red"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:75,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:105,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:135,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:165,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:195,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:225,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        this.unbreakableBricks.push(new Brick({x:255,y:70}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "blue"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:75,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:105,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:135,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:165,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:195,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:225,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        this.unbreakableBricks.push(new Brick({x:255,y:90}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "green"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:75,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:105,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:135,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:165,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:195,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:225,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        this.unbreakableBricks.push(new Brick({x:255,y:110}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "yellow"}));
        // Next Row
        this.unbreakableBricks.push(new Brick({x:75,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:105,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:135,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:165,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:195,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:225,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));
        this.unbreakableBricks.push(new Brick({x:255,y:130}, Stage1.brickWidth, Stage1.brickHeight, {value: 10, color: "purple"}));

        this.paddles.push(new Paddle({x:165, y:300}));

        this.killZone = new Brick({x:0,y:120}, 500, Stage1.brickHeight, {value: 10, color: "clear"})
    }

    unload() {
        this.unbreakableBricks = null;
        this.bricks = null;
        this.balls = null;
        this.paddles = null;
    }

    receiveInput(input) {
        switch(input) {
            case "ArrowLeft":
                this.movePaddle = -1;
                break;
            case "ArrowRight":
                this.movePaddle = 1;
                break;
            case "Space":
            default:
                this.movePaddle = 0;
                break;
        }
    }

    tickStage(timestamp) {
        let timeDiff = timestamp - this.lastTimestamp;
        // Handle Input
        if(this.movePaddle > 0 || this.movePaddle < 0) {
            // Translate paddles
            for(let p in this.paddles) {
                let paddle = this.paddles[p];
                let lastPos = paddle.origin;
                let newPosXOffset = this.movePaddle * timeDiff * 0.2;
                paddle.origin.x += newPosXOffset;
                let collision = false;
                // Check for collision
                for(let ub in this.unbreakableBricks) {
                    let unBrickCol = this.unbreakableBricks[ub].collidable;
                    if(paddle.collidable.isColliding(unBrickCol)) {
                        collision = true;
                        break;
                    }   
                }
                // Back up if collision
                if(collision) {
                    let reversedPosX = lastPos.x - newPosXOffset;
                    paddle.origin.x = reversedPosX;
                    //paddle.origin = lastPos;
                }
            }
        }
        // Move actors
        
        for(let b in this.balls) {
            let ball = this.balls[b];
            // Handle Balls Out of Bounds
            if(ball.collidable.isColliding(this.killZone.collidable)) {
                delete ball;
                this.gameDelegate.changeLife(-1);
                break;
            }

            // Handle Balls Bounces
            // If collision with Brick
            let collisionTarget = null;
            for(let ub in this.unbreakableBricks) {
                let unBrick = this.unbreakableBricks[ub];
                if(ball.collidable.isColliding(unBrick.collidable)) {
                    collisionTarget = unBrick;
                    break;
                }
            }
            if(collisionTarget === null) {
                for(let br in this.bricks) {
                    let brick = this.bricks[br];
                    if(ball.collidable.isColliding(brick.collidable)) {
                        collisionTarget = brick;
                        break;
                    }
                }
            }
            
            if(collisionTarget === null) {
                for(let p in this.paddles) {
                    let paddle = this.paddles[p].collidable;
                    if(ball.collidable.isColliding(paddleCol)) {
                        collisionTarget = paddle;
                        break;
                    }
                }
            }

            if(collisionTarget !== null) {
                ball
            }
        }
        // Move Balls
        

        // Perform Collisions
        // Update timestamp
        this.lastTimestamp = timestamp;
    }

    renderStage(context) {

        for( let unbrick in this.unbreakableBricks) {
            this.unbreakableBricks[unbrick].render(context);
        }
        for( let brick in this.bricks) {
            this.bricks[brick].render(context);
        }
        for( let ball in this.balls) {
            this.balls[ball].render(context);
        }
        for( let paddle in this.paddles) {
            this.paddles[paddle].render(context);
        }
    }

    createBallWithVelocity(origin, velocity) {
        let ball = new Ball(origin, ballRadius, {velocity: velocity});
    }
}