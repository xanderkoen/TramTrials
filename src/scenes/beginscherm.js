import { Actor,Scene, Input, Vector,} from "excalibur";
import { Resources, ResourceLoader } from "../js/resources";
export class Beginscherm extends Scene {
    game;

    constructor() {
        super({displayMode: 'FitScreenAndFill'});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Achtergrond.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('Level1')
        }
    }
}