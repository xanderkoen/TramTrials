import {CollisionType, Actor, Vector} from "excalibur"
import { Resources } from './resources.js'
export class Trampaal extends Actor {

    constructor(x, y) {
        super({ width: 75, height: 10000});
        this.pos =  new Vector (x, y)

        this.scale = new Vector(0.2, 0.2);

    }
    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(Resources.Trampaal.toSprite())
        this.body.collisionType = CollisionType.Fixed


    }
}