import { CollisionType, Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Ground2 extends Actor {

    constructor(x, y) {
        super({ width: Resources.Steen.width, height: Resources.Steen.height }) // collision box!
        this.pos = new Vector(x,y)
        this.z = -1
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Steen.toSprite())

        this.body.collisionType = CollisionType.Fixed
    }
}