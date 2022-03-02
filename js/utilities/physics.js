"use strict";

export class Physics {
  /*
    rect = {
        x - topLeftX;
        y - topLeftY;
        h - height;
        w - width;
    }
    */
  static rectsAreColliding(rect1, rect2) {
    if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
    ) {
        return true;
    }
    return false;
  }
}
