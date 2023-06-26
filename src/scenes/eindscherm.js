import {Actor, Input, Scene, Vector,} from "excalibur";
import {Resources} from "../js/resources";


export class Eindscherm extends Scene {
    game;
    levelint = 0
    constructor() {
        super({displayMode: 'FitScreenAndFill'});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Gameover.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        background.scale = new Vector(1.85, 1.75)
        this.add(background);
    }

    onActivate(ctx) {
        if (ctx.data) {
            this.levelint = ctx.data.level
            console.log(this.levelint)
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            //reset level

            switch (true) {
                case this.levelint === 1:
                this.game.goToScene('Level1')
                    break;

                case this.levelint === 2:
                    this.game.goToScene('Level1') // change to level 2 once added
                    break;
            }
        }
    }


}