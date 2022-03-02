'use strict';

import { GameObject } from "./game-object.js";
import { Collidable, HitboxShape } from "./collidable.js";
import Drawable from "./drawable.js";

/*
BrickProperties = {
    color,
    value,
    invulnerable,
}
*/

export class Brick extends GameObject {
    height;
    width;
    origin;
    properties;

    constructor(origin, width, height, properties) {
        super({collidable: {hitboxShape: HitboxShape.rect, getDimensions: null, getOrigin: null}, 
            drawable: {render: null}});
        this.origin = origin;
        this.width = width;
        this.height = height;
        this.properties = properties;
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

    getValue() {
        return this.value;
    }

    render(context) {
        context.fillStyle = this.properties.color;
        context.fillRect(this.origin.x- this.width/2, this.origin.y - this.height/2, this.width, this.height);
        context.strokeStyle = "black";
        context.strokeRect(this.origin.x- this.width/2, this.origin.y - this.height/2, this.width, this.height);
    }
}