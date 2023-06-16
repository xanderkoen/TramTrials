import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level1 } from "../scenes/Level1.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: 'FitScreenAndFill'
        })
        console.log("game.js")
        Physics.acc = new Vector(0, 800)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        //maak de levels aan
        const firstLevel = new Level1()

        //voeg de levels toe als scene
        this.addScene('Level1',firstLevel)
        //ga naar het de scene
        this.goToScene('Level1')
    }
}

new Game()
