import { Actor, CollisionType, Vector } from 'excalibur';

export class FinishLine extends Actor {
    constructor(x, y, width, height) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
            collisionType: CollisionType.Passive
        });
    }

    onInitialize(engine) {
        this.graphics.opacity = 0;
    }
}
