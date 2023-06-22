import {Actor, Input, Scene, Vector,} from "excalibur";
import {Resources} from "../js/resources";


export class Eindscherm extends Scene {
    game;
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

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            //reset level



            //
            this.game.goToScene('Beginscherm')
        }
    }


}