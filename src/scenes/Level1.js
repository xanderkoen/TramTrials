import {Scene, Vector, Actor,} from "excalibur";
import { Resources } from "../js/resources.js";
import {Player} from "../js/player";
import { Ticket } from "../js/ticket.js"
import {Ground} from "../js/Ground";
import {UI} from "../js/ui.js";
import {Collectibles} from "../js/collectibles.js";
import {Souvenir} from "../js/souvenir.js";
import {Goldpot} from "../js/Goldpot.js";
import {Trampaal} from "../js/trampaal";
import {Tramkabel} from "../js/tramkabel";

export class Level1 extends Scene {

    //level number
    levelint = 1

    //niet veranderen!
    spawnSouvenir = false

    pickedup = false

    //player start position
    startpos = new Vector(400,400)

    //tram start position
    trampos = new Vector (-200, 450)

    //positie souvenir
    Souvenirpos = new Vector(1100, 300)
    Souvenirvel = new Vector(-Math.random() * 1000, -250)

    //time in this level before the tram leaves
    leveltime = 5

    uivar


    onInitialize(_engine) {
        this.game = _engine
        this.game.showDebug(false)
        console.log("1st level");

        this.player = new Player()
        this.add(this.player)

        this.trampaal = new Trampaal(20,330)
        this.add(this.trampaal)

        this.tramkabel = new Tramkabel(662, 175)
        this.add(this.tramkabel)

        this.trampaal2 = new Trampaal(1304,330)
        this.add(this.trampaal2)

        this.createGround()

        //tramticket
        this.ticket = new Ticket(946, 480)
        this.add(this.ticket)

        //souvenir
        this.goldpot = new Goldpot(this.Souvenirpos)
        this.add(this.goldpot)

        this.souvenir = new Souvenir(this.Souvenirpos, this.Souvenirvel)
        //UI
        this.uivar = new UI()
        this.add(this.uivar)

        //CollectiblesUI
        this.collectvar = new Collectibles()
        this.add(this.collectvar)

        this.background = new Actor()
        this.background.graphics.use(Resources.Achtergrond.toSprite())
        this.background.z = -2
        this.background.scale = new Vector(1.5, 1.45)
        this.add(this.background)
    }

    onActivate(_context) {
        //reset all in level
        this.resetLevel()
        this.uivar.startTimer(this.levelint)
    }

    onPreUpdate(_engine, _delta) {
        if (this.ticket.isKilled()){
            this.collectvar.PickupTicket()
        }

        if (this.player.isKilled()){
            this.uivar.ingestapt = true
            this.uivar.tram.winTram()
        }

        if (this.goldpot.isKilled() && !this.spawnSouvenir){
                this.add(this.souvenir)
                this.souvenir.spawn()
                this.spawnSouvenir = true

        }

        if (this.souvenir.isKilled() && !this.pickedup) {
            if (this.spawnSouvenir){
                this.collectvar.PickupSouvenir()
                this.pickedup = true
            }
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
        this.player.ticket = false
        //put back to spawn
        this.player.pos = this.startpos

        //reset collectibles UI
        this.collectvar.ResetCollectiblesUI()

        //reset ui
        this.uivar.resetAll(this.leveltime, this.trampos)

        if (this.ticket.isKilled()){
            this.add(this.ticket)
        }

        //add pot back
        if (this.goldpot.isKilled()){
            this.add(this.goldpot)
        }

        //remove souvenir if its still there
        if (!this.souvenir.isKilled()){
            this.souvenir.pickup()
        }

        if (this.player.isKilled()){
            this.add(this.player)
        }

        //super belangrijk: NIET AANPASSEN!!!
        this.uivar.tram.isPlaying = true
        this.uivar.ingestapt = false
        this.spawnSouvenir = false
        this.pickedup = false
    }
}
