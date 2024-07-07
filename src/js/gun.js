import { Actor, Vector, CollisionType } from "excalibur";

export class Gun extends Actor {
    constructor(sprite, x, y, width, height, identifier) {
        super({
            pos: new Vector(x, y),
            collisionType: CollisionType.Passive, // Set collision type if needed
            width: width,
            height: height
        });
        this.graphics.use(sprite);
        this.identifier = identifier; // Add an identifier property
    }
}