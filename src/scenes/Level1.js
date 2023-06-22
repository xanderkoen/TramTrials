import {Color, Font, Label, Scene, Timer, Vector, Engine, Delay, Actor, ParallaxComponent} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import { Ticket } from "../js/ticket.js"
import {Ground} from "../js/Ground";
import {Eindscherm} from "./eindscherm";
import {Tram} from "../js/tram";
import {UI} from "../js/ui.js";
import {Collectibles} from "../js/collectibles.js";

export class Level1 extends Scene {

    //level number
    levelint = 1

    //player start position
    startpos = new Vector(400,400)

    //tram start position
    trampos = new Vector (-200, 450)

    //time in this level before the tram leaves
    leveltime = 8

    uivar


    onInitialize(_engine) {
        this.game = _engine
        this.game.showDebug(true)
        console.log("1st level");

        this.player = new Player()
        this.add(this.player)

        this.createGround()

        this.ticket = new Ticket(946, 480)
        this.add(this.ticket)

        //UI
        this.uivar = new UI()
        this.add(this.uivar)

        //Collectibles
        this.collectvar = new Collectibles()
        this.add(this.collectvar)

        this.background = new Actor()
        this.background.graphics.use(Resources.Achtergrond.toSprite())
        this.background.z = -1
        this.background.scale = new Vector(1.5, 1.45)
        this.add(this.background)
    }

    onActivate(_context) {
        //reset all in level
        this.resetLevel()
        this.uivar.startTimer()
    }

    onPreUpdate(_engine, _delta) {
        if (this.ticket.isKilled()){
            this.collectvar.PickupTicket()
        }

        if (this.player.isKilled()){
            this.uivar.ingestapt = true
            this.uivar.tram.winTram()
        }
    }

    createGround() {
        for (let pos of Resources.GroundData.path) {
            const ground = new Ground(pos.x, pos.y)
            this.add(ground)
        }
    }


    resetLevel(){
        //reset player
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = this.startpos

        //reset collectibles UI
        this.collectvar.ResetCollectiblesUI()

        //reset ui
        this.uivar.resetAll(this.leveltime, this.trampos)

        if (this.ticket.isKilled()){
            this.add(this.ticket)
        }

        if (this.player.isKilled()){
            this.add(this.player)
        }

        this.uivar.tram.isPlaying = true
        this.uivar.ingestapt = false
    }
}
