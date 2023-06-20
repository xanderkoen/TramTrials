import { Physics, CollisionType, Actor, Vector, CollisionGroup, Engine } from "excalibur"
import { Resources } from './resources.js'

export class Tram extends Actor {

    game

    constructor(x, y) {
        super({ width: Resources.Tram.width, height: Resources.Tram.height }) // collision box!
        this.pos = new Vector(
            -200,
            480
        )
        this.scale = new Vector(1, 1);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Tram.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.game = _engine

    }


}