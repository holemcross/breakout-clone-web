'use strict';

import { GameObject } from "./game-object.js";
import { Physics } from "../utilities/physics.js"
import { Collidable, HitboxShape } from "./collidable.js";
import Drawable from "./drawable.js";

export class Paddle extends GameObject {
    origin;
    width;
    height;

    constructor(origin) {
        super({collidable: {hitboxShape: HitboxShape.rect, getDimensions: null, getOrigin: null}, 
            drawable: {render: null}});
        this.origin = origin;
        this.width = 30;
        this.height = 10;
        this.collidable = new Collidable({hitboxShape: HitboxShape.rect, getDimensions: () => this.getDimensions(), getOrigin: () => this.getOrigin()});
        this.drawable = new Drawable({render: this.render});
    }

    getOrigin() {
        return this.origin;
    }

    getDimensions() {
        return { 
            hitboxShape: HitboxShape.rect,
            height: this.height,
            width: this.width
        };
    }

    render(context) {
        // context.fillStyle = "rgba(0.5, 0.5, 0.5, 1)";
        context.fillStyle = "brown";
        context.fillRect(this.origin.x-this.width/2, this.origin.y - this.height/2, this.width, this.height);
    }
}