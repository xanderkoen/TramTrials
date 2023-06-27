import {Actor, BaseAlign, Color, Font, FontUnit, Input, Label, Scene, Text, Vector,} from "excalibur";
import {Resources} from "../js/resources.js";


export class Scorescene extends Scene {
    game;
    levelint = 0
    tijd = 0
    souvenir = false
    souvtext = "leeg"

    constructor() {
        super({displayMode: 'FitScreenAndFill'});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.scorescreen.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        background.scale = new Vector(4.3, 4)
        this.add(background);

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: `Je had nog ${this.tijd} seconde over \n Je hebt het ${this.souvtext} Souvenir opgepakt`,
            pos: new Vector(200, 50),
        })

        this.add(this.textScore)

    }

    onActivate(ctx) {
        if (ctx.data) {
            this.levelint = ctx.data.level
            this.tijd = ctx.data.tijd
            this.souvenir = ctx.data.souvenir

            console.log(this.levelint, this.tijd, this.souvenir)
        }
        this.updateText()
    }

    updateText() {

        if (this.souvenir === true){
            this.souvtext = "wel"
        }else{
            this.souvtext = "niet"
        }

        this.textScore.text = `Je had nog ${this.tijd} seconde over \n Je hebt het Souvenir ${this.souvtext} opgepakt`
    }

    onPreUpdate(_engine, _delta) {
        if (this.game.input.keyboard.wasPressed(Input.Keys.Enter)) {

            this.levelint++

            switch (true) {
                case this.levelint === 1:
                    this.game.goToScene('Level1')
                    console.log("level1")
                    break;

                case this.levelint === 2:
                    this.game.goToScene('Level2') // change to level2 once added
                        console.log("level2")
                    break;

                case this.levelint === 3:
                    this.game.goToScene("Credits")
            }
        }
    }


}