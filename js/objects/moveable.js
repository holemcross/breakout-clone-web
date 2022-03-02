'use strict';

export class Moveable {
    lastVelocity;
    constructor(inital = {x:0,y:0}) {
        this.lastVelocity = inital;
    }

    getVelocity() {
        return this.lastVelocity;
    }

    setVelocity(newVelocity) {
        this.lastVelocity = newVelocity;
    }
}