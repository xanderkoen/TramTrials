import { CollisionType, Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Ticket extends Actor {

    constructor(x, y) {
        super({ width: Resources.Ground.width, height: Resources.Ground.height }) // collision box!
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Test.toSprite())

        this.body.collisionType = CollisionType.Fixed

        this.scale = new Vector(0.2, 0.2)
    }
}