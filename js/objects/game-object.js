'use-strict';
import Collidable from "./collidable.js";
import Drawable from "./drawable.js";
import { Moveable } from "./moveable.js";

export class GameObject {
    collidable;
    drawable;
    moveable;
    disable
    
    constructor(params) {
        this.collidable = new Collidable(params.collidable);
        this.drawable = new Drawable(params.drawable);
        this.moveable = new Moveable(params.moveable);
    }
}