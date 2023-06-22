import { Physics, CollisionType, Actor, Vector, CollisionGroup, Engine } from "excalibur"
import { Resources } from './resources.js'
import {Ticket} from "./ticket";

export class Tram extends Actor {

    game
    startpos = new Vector (-200, 480)

    constructor(x, y) {
        super({ width: Resources.Tram.width, height: 100 }) // collision box!
        this.pos = this.startpos
        this.scale = new Vector(1, 1);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Tram.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.game = _engine
        this.anchor = new Vector(0.5, 0.5)

    }

    resettram(startpos) {

        //put tram back to startpos
        this.pos = startpos
        this.body.collisionType = CollisionType.Fixed
    }

    moveTram() {
        this.vel = new Vector(550, 0)
        console.log('tram vertrekt')
        //after 2 seconds go to game over

        setTimeout(() => {this.game.goToScene('Eindscherm')}, 3000)
        this.body.collisionType = CollisionType.PreventCollision

    }



}