'use strict';

export class Drawable {
    render;
    constructor(params) {
        this.render = params.render;
    }

    render(context) {
        return this.render(context);
    }
}

export default Drawable;