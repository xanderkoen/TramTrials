import {Color, Font, Label, Scene, Timer, Vector, Engine} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import {Ground} from "../js/Ground";
import {Beginscherm} from "./beginscherm";
import {Eindscherm} from "./eindscherm";

export class Level1 extends Scene {
    score
    textScore

    startpos = new Vector(1500,900)

    onInitialize(_engine) {
        this.score = 5
        console.log("1st level");
        this.player = new Player()
        this.resetPlayer()
        this.add(this.player)


        this.createGround()
        this.resetTime()

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
            console.log('xander heeft een hartaanval nodig nu per direct inshallah')
                this.engine.goToScene('Eindscherm')

            this.resetTime()
            this.textScore.text = `start de tijd`
        }
        localStorage.setItem("score", JSON.stringify(data))
    }
    resetTime(){
        this.score = 5
    }
}
