import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Gun } from './gun.js';
import { FinishLine } from './finishline.js';

export class Player extends Actor {
    constructor(x, y, width = 50, height = 100, isPlayer1 = true, game) {
        super({
            width: width,
            height: height,
            pos: new Vector(x, y),
        });
        
        this.body.collisionType = CollisionType.Active;

        // Set anchor to the center of the car sprite for proper rotation
        // this.anchor = new Vector(0.5, 0.5);

        if (isPlayer1) {
            this.graphics.use(Resources.RedCar.toSprite());
        } else {
            this.graphics.use(Resources.BlueCar.toSprite());
        }
        
        this.isPlayer1 = isPlayer1; // Tracks if this is player 1 or player 2
        this.hasGun = false;
        this.game = game;
    }

    onInitialize(engine) {
        this.body.mass = 7;  // Sets the mass of the car
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        if (event.other instanceof Gun) {
            console.log('Picked up the Gun.');
            this.hasGun = true;
            event.other.kill();

            // Create a new Gun instance as a child actor and attach it to the player
            const gun = new Gun(Resources.Gun.toSprite(), 0, 0, 30, 10, "Gun");
            this.addChild(gun);

            // Position the gun on top of the player
            gun.pos = new Vector(0, -this.height / 2 - gun.height / 2);
        }

        // Check if the player has passed a checkpoint
        if (event.other instanceof FinishLine) {
            if (!event.other.isCheckpointPassed()) {
                // Mark checkpoint as passed
                event.other.setCheckpointPassed();
                console.log('Checkpoint passed!');
            } else {
                // If all checkpoints are passed and it's the final finish line, add a lap
                if (event.other.isFinalFinishLine && this.game) {
                    this.game.addLap();
                }
            }
        }
    }

    onPreUpdate(engine, delta) {
        const impulseStrength = 2; // Acceleration force
        const decelerationRate = 0.99;  // Rate at which the car slows down
        const velocityThreshold = 10;  // Minimum velocity before stopping

        if (this.isPlayer1) {
            if (engine.input.keyboard.isHeld(Keys.W)) {
                this.body.applyLinearImpulse(new Vector(0, -impulseStrength * delta));
            }
            if (engine.input.keyboard.isHeld(Keys.A)) {
                this.body.applyLinearImpulse(new Vector(-impulseStrength * delta, 0));
            }
            if (engine.input.keyboard.isHeld(Keys.S)) {
                this.body.applyLinearImpulse(new Vector(0, impulseStrength * delta));
            }
            if (engine.input.keyboard.isHeld(Keys.D)) {
                this.body.applyLinearImpulse(new Vector(impulseStrength * delta, 0));
            }
        } else {
            if (engine.input.keyboard.isHeld(Keys.Up)) {
                this.body.applyLinearImpulse(new Vector(0, -impulseStrength * delta));
            }
            if (engine.input.keyboard.isHeld(Keys.Left)) {
                this.body.applyLinearImpulse(new Vector(-impulseStrength * delta, 0));
            }
            if (engine.input.keyboard.isHeld(Keys.Down)) {
                this.body.applyLinearImpulse(new Vector(0, impulseStrength * delta));
            }
            if (engine.input.keyboard.isHeld(Keys.Right)) {
                this.body.applyLinearImpulse(new Vector(impulseStrength * delta, 0));
            }
        }

        // Decelerate the car when no keys are pressed
        if (!engine.input.keyboard.isHeld(Keys.W) && 
        !engine.input.keyboard.isHeld(Keys.S) && 
        !engine.input.keyboard.isHeld(Keys.A) && 
        !engine.input.keyboard.isHeld(Keys.D)) {

        // Gradually reduce the velocity (apply "friction")
        this.body.vel = this.body.vel.scale(decelerationRate);
        
        // Stop completely when velocity is very low
        if (this.body.vel.size < velocityThreshold) {
            this.body.vel = Vector.Zero.clone();  // Set velocity to zero when below the threshold
            }
        }

        // Limit the maximum speed
        const maxSpeed = 350;
        if (this.body.vel.distance(Vector.Zero) > maxSpeed) {
            this.body.vel = this.body.vel.normalize().scale(maxSpeed);
        }

        this.graphics.flipHorizontal = (this.body.vel.x > 0);
    }
}
