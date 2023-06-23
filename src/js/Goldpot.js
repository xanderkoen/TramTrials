import {CollisionType, Actor, Vector} from "excalibur"
import { Resources } from './resources.js'

export class Goldpot extends Actor {

    constructor(pos) {
        super({ width: Resources.Potcrack.width, height: Resources.Potcrack.height }) // collision box!
        this.pos = pos
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Potcrack.toSprite())
        this.body.collisionType = CollisionType.Fixed
    }

    Pickup() {
        this.kill()
    }

}