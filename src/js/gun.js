import { Actor, Vector, CollisionType } from "excalibur";

export class Gun extends Actor {
    constructor(sprite, x, y, width, height, identifier) {
        super({
            pos: new Vector(x, y),
            collisionType: CollisionType.Passive,
            width: width,
            height: height
        });
        this.graphics.use(sprite);
        this.identifier = identifier;
    }
}