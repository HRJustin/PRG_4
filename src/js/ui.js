import { ScreenElement, Label, Color } from "excalibur";

export class UI extends ScreenElement {
    scoreText;

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Laps: 0',
            pos: { x: 50, y: 50 },
            font: new ex.Font({
                size: 30,
                color: Color.White,
            })
        });
        this.addChild(this.scoreText);
    }

    updateScore(laps) {
        this.scoreText.text = `Laps: ${laps}`;
    }
}

// export class UI extends ScreenElement {
//     onInitialize(engine) {
//         this.scoreText = new Label({...})
//         this.addChild(this.scoreText)
//     }
// }