import '../css/style.css'
import { Actor, Engine, Vector, Physics, Axis, Color, Font, FontUnit, Label, ParallaxComponent, Scene, vec} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "../js/player.js";

export class Game extends Engine {

    player

    constructor() {super({
        width: 800,
        height: 600,
        displayMode: 'FitScreenAndFill'
    })

        this.start(ResourceLoader).then(() => this.startGame())
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);

        // this.levelint = 1

        console.log("first level")

        // this.background = new Background()
        // this.background.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        // this.add(this.background)

        Physics.acc = new Vector(0, 800)
        this.player = new Player()
        this.resetPlayer()
        this.add(this.player)


    }

    startGame() {
        console.log("start de game!")
        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(400, 300)
        // fish.vel = new Vector(-10,0)
        // this.add(fish)


        console.log("test")
    }
    resetPlayer() {
        // reset velocity
        // this.player.vel.y = 0
        // this.player.vel.x = 0
        //
        // //put back to spawn
        // this.player.pos = this.startpos
    }
}

new Game()