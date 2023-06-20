import '../css/style.css'
import { Engine, Physics, Vector} from "excalibur"
import {  ResourceLoader } from './resources.js'
import { Level1 } from "../scenes/Level1.js";
import {Beginscherm} from "../scenes/beginscherm.js";
import {Eindscherm} from "../scenes/eindscherm";

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
    onInitialize(_engine) {
        super.onInitialize(_engine);

        console.log("first level")
    }

    startGame() {
        //maak de levels aan
        const firstLevel = new Level1()

        //voeg de levels toe als scene
        this.addScene('Level1',firstLevel)
        this.addScene('Beginscherm', new Beginscherm())
        this.addScene('Eindscherm', new Eindscherm())

        //ga naar het de scene
        this.goToScene('Beginscherm')

    }
}

new Game()
