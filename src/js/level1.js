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

    onInitialize() {
        this.background = new Background(Resources.Background.toSprite(), 750, 370, 3, 3);
        this.add(this.background);

        // Add the finish line
        this.finishLine = new FinishLine(400, 300, 200, 10);
        this.add(this.finishLine);
    }
    
    onActivate() {
        // Create Player 1 (Red Car)
        this.player1 = new Player(300, 300, 50, 50, true, this.game);
        this.add(this.player1);
    
        // Create Player 2 (Blue Car)
        this.player2 = new Player(500, 300, 50, 50, false, this.game);
        this.add(this.player2);

        // Create and add a Gun to the scene
        this.gun = new Gun(Resources.Gun.toSprite(), 400, 300, 30, 10, "Gun");
        this.add(this.gun);
    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);

        // Player 1 camera follow
        const player1Pos = this.player1.pos;
        this.camera.pos = player1Pos;
    }
}
