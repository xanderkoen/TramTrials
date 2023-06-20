import {Color, Font, Label, Scene, Timer, Vector, Engine} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import { Ticket } from "../js/ticket.js"
import {Ground} from "../js/Ground";
import {Eindscherm} from "./eindscherm";
import {Tram} from "../js/tram";

export class Level1 extends Scene {
    score
    textScore

    startpos = new Vector(1500,900)

    onInitialize(_engine) {
        _engine.showDebug(true)
        this.score = 1
        console.log("1st level");
        this.player = new Player()
        this.resetPlayer()
        this.add(this.player)


        this.createGround()
        this.resetTime()
        this.tram = new Tram()
        this.add(this.tram)

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

        scoreTimer.start()
        this.add(this.textScore)

        const tickit = new Ticket(946, 480)
        this.add(tickit)

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
        if (this.score > 0){
            this.textScore.text = `Tijd tot vertrek: ${this.score}`


        }else{
            this.textScore.text = `Game over`
            this.engine.goToScene('Eindscherm')

            this.resetTime()
            this.textScore.text = `start de tijd`
        }
        localStorage.setItem("score", JSON.stringify(data))
    }
    resetTime(){
        this.score = 60
    }
}
