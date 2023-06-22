import {CollisionType, Actor, Vector, SpriteSheet, Animation, range} from "excalibur"
import { Resources } from './resources.js'
import {Player} from "./player";

export class Ticket extends Actor {
    cardAnimations = []
    constructor(x, y) {
        super({ width: Resources.Ground.width / 2, height: Resources.Ground.height }) // collision box!
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {

        let CardSheet = SpriteSheet.fromImageSource({
            image:Resources.Kaart,
            grid: {
                rows: 1,
                columns: 2,
                spriteHeight: 47,
                spriteWidth: 70,
            }
        })

        this.cardAnimations['cardSheet'] = Animation.fromSpriteSheet(CardSheet, range(0, 2), 500);

        this.graphics.use(this.cardAnimations['cardSheet'])

        this.body.collisionType = CollisionType.Fixed
    }

    Pickup() {
        this.kill()
    }

}