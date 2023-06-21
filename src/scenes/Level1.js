import {Color, Font, Label, Scene, Timer, Vector, Engine, Delay} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import { Ticket } from "../js/ticket.js"
import {Ground} from "../js/Ground";
import {Eindscherm} from "./eindscherm";
import {Tram} from "../js/tram";

export class Level1 extends Scene {
    score
    textScore

    startpos = new Vector(400,400)
    trampos = new Vector (-200, 480)

    tram

    onInitialize(_engine) {
        _engine.showDebug(true)
        console.log("1st level");

        this.player = new Player()
        this.add(this.player)

        this.createGround()

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: 'Start the Timer!',
            pos: new Vector(250, 50),

        })

        const scoreTimer = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval: 1000,
        })

        this.add(scoreTimer)

        this.updateScore()
        this.add(this.textScore)

        const tickit = new Ticket(946, 480)
        this.add(tickit)

        let tram = new Tram()
        this.tram = tram
        this.add(tram)

        _engine.showDebug(true)




    }
    createGround() {
        for (let pos of Resources.GroundData.path) {
            const ground = new Ground(pos.x, pos.y)
            this.add(ground)
        }

        console.log(Resources.GroundData)
    }
    resetPlayer() {
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = this.startpos
    }

    updateScore(engine) {
        this.score--
        let data = {
            score: this.score
        }
        if (this.score === 0){
            //this.textScore.text = `Tijd tot vertrek: ${this.score}`

            this.textScore.text = `Game over`
            this.tram.vel = new Vector(800,0);
            this.textScore.text = `start de tijd`

            setTimeout(() => {
                this.resetLevel()
                this.engine.goToScene('Eindscherm')
            }, 3000)

        }
        localStorage.setItem("score", JSON.stringify(data))
    }
    resetLevel(){
        this.score = 10
        this.resetPlayer()
        this.tram.vel = new Vector(0,0);
        this.tram.resettram(this.trampos)
    }
}
