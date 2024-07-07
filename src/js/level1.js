import { Scene } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './players.js';
import { Background } from './background.js';
import { Gun } from './gun.js';
import { FinishLine } from './finishline.js';

export class Level1 extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        this.background = new Background(Resources.Background.toSprite(), 750, 370, 3, 3);
        this.add(this.background);

        // Add checkpoints
        this.checkpoints = [];

        // Example of checkpoint creation
        const checkpoint1 = new FinishLine(1700, 300, 200, 10, false); // Adjust position and size as needed
        this.add(checkpoint1);
        this.checkpoints.push(checkpoint1);

        // Example of another checkpoint
        const checkpoint2 = new FinishLine(-150, 300, 200, 10, false); // Adjust position and size as needed
        this.add(checkpoint2);
        this.checkpoints.push(checkpoint2);

        // Set the last checkpoint and final finish line
        this.checkpoints[this.checkpoints.length - 1].isFinalFinishLine = true;

        // Add the finish line (final) 1700, 300, 200, 10, fals
        this.finishLineFinal = new FinishLine(1700, 300, 200, 10, false);
        this.add(this.finishLineFinal);

        // Create Player 1 (Red Car)
        this.player1 = new Player(-150, 200, 50, 80, true, this.game);
        this.add(this.player1);
    
        // Create Player 2 (Blue Car)
        this.player2 = new Player(-50, 200, 50, 80, false, this.game);
        this.add(this.player2);

        // Create and add a Gun to the scene
        this.gun = new Gun(Resources.Gun.toSprite(), 500, 0, 50, 40, "Gun");
        this.add(this.gun);
    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);

        // Player 1 camera follow
        const player1Pos = this.player1.pos;
        this.camera.pos = player1Pos;
    }
}
