import {Actor, Input, Scene, Vector,} from "excalibur";
import {Resources} from "../js/resources";


export class Credits extends Scene {
    game;
    constructor() {
        super({displayMode: 'FitScreenAndFill'});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.eind.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        background.scale = new Vector(4.3, 4)
        this.add(background);
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            //reset level
            this.game.goToScene("Beginscherm")
        }
    }
}