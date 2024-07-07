import { Engine, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level1 } from './level1.js';
import { GroupedColliders } from './groupedcolliders.js';
import { UI } from './ui.js';

export class Game extends Engine {
    score = 0;
    laps = 0;

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("Start the game!");

        const mainScene = new Level1(this);
        this.add('mainScene', mainScene);

        const groupedColliders = new GroupedColliders();
        mainScene.add(groupedColliders);

        // Initialize and add UI
        this.ui = new UI();
        console.log("UI initialized", this.ui);
        this.add(this.ui);

        this.goToScene('mainScene');
    }

    resetLap() {       
        this.laps = 0;
        this.updateScoreboard();
    }

    addLap() {
        console.log("Added lap");
        this.laps++;
        this.updateScoreboard();
        if (this.laps >= 2) {
            this.gameOver();
        }
    }

    gameOver() {
        console.log("Game over");
        alert("You win!");
    }

    updateScoreboard() {
        console.log("Updating scoreboard");
        if (this.ui && this.ui.scoreText) {
            this.ui.updateScore(this.laps);
        } else {
            console.error("UI or scoreText is not initialized");
        }
    }
}

new Game();
