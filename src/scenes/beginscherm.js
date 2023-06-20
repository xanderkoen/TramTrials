import { Actor,Scene, Input, Vector,} from "excalibur";
import { Resources, ResourceLoader } from "../js/resources";
export class Beginscherm extends Scene {
    game;

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.MainMenu.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        background.scale = new Vector(1.85, 1.75)
        this.add(background);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('Level1')
        }
    }
}