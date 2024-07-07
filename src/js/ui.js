import { ScreenElement, Label, Color, FontUnit } from "excalibur";

export class UI extends ScreenElement {
    constructor() {
        super();
        this.scoreText = null;
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Laps: 0',
            pos: { x: 10, y: 10 },
            color: Color.White,
            font: {
                size: 20,
                unit: FontUnit.Px
            }
        });
        this.addChild(this.scoreText);
    }

    updateScore(laps) {
        if (this.scoreText) {
            this.scoreText.text = `Laps: ${laps}`;
        }
    }
}