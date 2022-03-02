'use strict';
import { Enum } from "../utilities/enums.js";
import { Physics } from "../utilities/physics.js";

export const HitboxShape = new Enum(
    "rect",
    "circle"
);

export class Collidable {
    hitboxShape;
    getOrigin;
    getDimensions;
    
    constructor(params) {
        this.hitboxShape = params.hitboxShape;
        this.getOrigin = params.getOrigin;
        this.getDimensions = params.getDimensions;
    }

    getOrigin() {
        return this.getOrigin()
    }

    getDimensions() {
        return this.getDimensions();
    }

    isColliding(collidable) {
        let otherDimensions = collidable.getDimensions();
        let otherOrigin = collidable.getOrigin();
        let origin = this.getOrigin();
        let dimensions = this.getDimensions();

        if(this.hitboxShape === HitboxShape.circle) {
            // If Circle Sphere to Box
            if(otherDimensions.hitboxShape == HitboxShape.circle) {
                let radius = dimensions.radius;

                var distX = Math.abs(origin.x - otherOrigin.x-otherDimensions.width/2);
                var distY = Math.abs(origin.y - otherOrigin.y-otherDimensions.height/2);
    
                // Dist is greater than half width and radius
                if (distX > (otherDimensions.width/2 + radius)) { return false; }
                if (distY > (otherDimensions.height/2 + radius)) { return false; }
    
                // Dist is less than half rect
                if (distX <= (otherDimensions.width/2)) { return true; } 
                if (distY <= (otherDimensions.height/2)) { return true; }
    
                // Test corner
                var dx=distX-otherDimensions.width/2;
                var dy=distY-otherDimensions.height/2;
    
                return (dx*dx+dy*dy<=(this.radius*this.radius));
            }
            return false;
        } else if(this.hitboxShape === HitboxShape.rect) {
            let width = dimensions.width;
            let height = dimensions.height;
            // If Box to Box
            if(otherDimensions.hitboxShape == HitboxShape.rect) {
                let rect1 = {
                    x: origin.x - width/2,
                    y: origin.y - height/2,
                    w: width,
                    h: height,
                };

                let rect2 = {
                    x: otherOrigin.x - otherDimensions.width/2,
                    y: otherOrigin.y - otherDimensions.height/2,
                    w: otherDimensions.width,
                    h: otherDimensions.height,
                };
                return Physics.rectsAreColliding(rect1, rect2);
            }
            // If Box to Circle
            else if(otherDimensions.hitboxShape == HitboxShape.circle) {
                var distX = Math.abs(otherOrigin.x - origin.x-width/2);
                var distY = Math.abs(otherOrigin.y - origin.y-height/2);

                // Dist is greater than half width and radius
                if (distX > (width/2 + otherDimensions.radius)) { return false; }
                if (distY > (height/2 + otherDimensions.radius)) { return false; }

                // Dist is less than half rect
                if (distX <= (width/2)) { return true; } 
                if (distY <= (height/2)) { return true; }

                // Test corner
                var dx=distX-width/2;
                var dy=distY-height/2;

                return (dx*dx+dy*dy<=(otherDimensions.radius*otherDimensions.radius));
            }
        }
    }
}

export default Collidable;