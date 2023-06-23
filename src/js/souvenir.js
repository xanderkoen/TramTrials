import {CollisionType, Actor, Vector, Shape, vec} from "excalibur"
import { Resources } from './resources.js'

export class Souvenir extends Actor {

    posvar
    velvar

    constructor(pos, vel) {
        super({
            width: Resources.Test.width, height: Resources.Test.height,
            collider: Shape.Circle(60)
        })
        this.pos = pos
        this.posvar = pos
        this.vel = vel
        this.velvar = vel
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Test.toSprite())
        this.scale = new Vector( 0.05,0.05)
        this.body.collisionType = CollisionType.Active
    }

    spawn(){
        this.body.bounciness = 1
        this.pos = this.posvar
        this.vel = this.velvar
        this.body.useGravity = true
    }

    pickup() {
        this.kill()
    }

}