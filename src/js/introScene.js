import { Scene, Label, Color, Vector, Font } from "excalibur";

export class IntroScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        this.backgroundColor = Color.Black;
        
        // Creates a label to display the introduction message
        const introLabel = new Label();
        introLabel.text = "Blacers", "Press Enter to Start the Game";
        introLabel.color = Color.White;

        // Define the font size, family and color
        introLabel.font = new Font({
            family: 'Arial',
            size: 20,
            color: Color.White
        });

        // Center the label based on the engine's width and height
        introLabel.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2); // Center position
        introLabel.anchor.setTo(0.5, 0.5); // Center anchor point

        this.add(introLabel);

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === "Enter") {
                this.game.goToScene('mainScene'); // Transition to the main scene (Level 1)
            }
        });
    }
}
