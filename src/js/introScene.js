import { Scene, Label, Color, Vector, Font } from "excalibur";

export class IntroScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        // Set the background color of the scene
        this.backgroundColor = Color.Black;
        
        // Create a label to display the introduction message
        const introLabel = new Label();
        introLabel.text = "Press Enter to Start the Game";
        introLabel.color = Color.White;

        // Use the Font class to define the font size and family
        introLabel.font = new Font({
            family: 'Arial', // Font family
            size: 50, // Font size
            color: Color.White // Font color
        });

        // Center the label based on the engine's width and height
        introLabel.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2); // Center position
        introLabel.anchor.setTo(0.5, 0.5); // Center anchor point

        this.add(introLabel);

        // Listen for the Enter key press
        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === "Enter") {
                this.game.goToScene('mainScene'); // Transition to the main scene (Level 1)
            }
        });
    }
}
