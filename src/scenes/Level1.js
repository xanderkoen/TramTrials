import {Scene} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";

export class Level1 extends Scene {
    onInitialize(_engine) {
        console.log("1st level");
        this.player = new Player()

        this.add(this.player)

    }

}
