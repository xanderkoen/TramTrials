import { Physics, CollisionType, Actor, Vector, CollisionGroup, Engine } from "excalibur"
import { Resources } from './resources.js'

export class Tram extends Actor {

    game
    startpos = new Vector (-200, 480)

    constructor(x, y) {
        super({ width: Resources.Tram.width, height: Resources.Tram.height }) // collision box!
        this.pos = this.startpos
        this.scale = new Vector(1, 1);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Tram.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.game = _engine

    }

    resettram(startpos) {

        //put tram back to startpos
        this.pos = startpos
    }

    moveTram() {
        this.vel = new Vector(800, 0)

        //after 2 seconds go to game over
        setTimeout(() => {this.game.goToScene('Eindscherm')}, 2000)
    }


}