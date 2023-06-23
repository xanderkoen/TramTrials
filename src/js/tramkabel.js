import {CollisionType, Actor, Vector, SpriteSheet, Animation, range} from "excalibur"
import { Resources } from './resources.js'
import {Trampaal} from "./trampaal";
export class Tramkabel extends Trampaal {
    tramkabelAnimations = []

    constructor(x, y) {
        super({width: 0,height: 0});
        this.pos =  new Vector (x, y)

        this.scale = new Vector(0.5649, 0.5);

    }
    onInitialize(_engine) {
        // super.onInitialize(_engine);
        let TramkabelSheett = SpriteSheet.fromImageSource({
            image:Resources.Tramkabelsheet,
            grid: {
                rows: 1,
                columns: 2,
                spriteHeight:375 ,
                spriteWidth: Resources.Tramkabelsheet.width / 2 ,
            }
        })
        this.tramkabelAnimations['tramkabelsheet'] = Animation.fromSpriteSheet(TramkabelSheett, range(0, 2), 500);

        this.graphics.use(this.tramkabelAnimations['tramkabelsheet'])
        this.body.collisionType = CollisionType.PreventCollision




    }
}