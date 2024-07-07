import { Actor, CollisionType, Vector } from 'excalibur';

export class FinishLine extends Actor {
    constructor(x, y, width, height, checkpointPassed = false) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
            collisionType: CollisionType.Passive
        });

        this.checkpointPassed = checkpointPassed;
        this.isFinalFinishLine = false; 
    }

    onInitialize(engine) {
        this.graphics.opacity = 0;
    }

    setCheckpointPassed() {
        this.checkpointPassed = true;
    }

    isCheckpointPassed() {
        return this.checkpointPassed;
    }
}
