'use strict';

import { Collidable, HitboxShape } from "./collidable.js";
import Drawable from "./drawable.js";
import { GameObject } from "./game-object.js";
import { Moveable } from "./moveable.js";

/* BallProperties = {
    color,
}
*/

export class Ball extends GameObject {
    origin;
    radius;
    properties;

    constructor(origin, radius, properties) {
        super({collidable: {hitboxShape: HitboxShape.circle, getDimensions: null, getOrigin: null}, 
            drawable: {render: null}, moveable:{}});
        this.origin = origin;
        this.radius = radius;
        this.properties = properties;
        this.collidable = new Collidable({hitboxShape: HitboxShape.circle, getDimensions: () => this.getDimensions(), getOrigin: () => this.getOrigin()});
        this.drawable = new Drawable({render: this.render});
        this.moveable = new Moveable(properties.velocity);
    }

    getOrigin() {
        return this.origin;
    }

    getDimensions() {
        return { 
            hitboxShape: HitboxShape.circle,
            radius: this.radius,
        };
    }

    render(context) {
        context.fillStyle = "grey";
        ctx.beginPath();
        ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}