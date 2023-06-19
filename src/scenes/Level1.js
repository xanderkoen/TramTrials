import {Scene, Vector} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import {Ground} from "../js/Ground";

export class Level1 extends Scene {

    startpos = new Vector(1500,900)

    onInitialize(_engine) {
        console.log("1st level");
        this.player = new Player()
        this.resetPlayer()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)

        this.createGround()
    }
    createGround() {
        for (let pos of Resources.GroundData.path) {
            const ground = new Ground(pos.x, pos.y)
            this.add(ground)
        }

        console.log(Resources.GroundData)
    }
    resetPlayer() {
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = this.startpos
    }
}
