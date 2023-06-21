import {
    Engine,
    TextAlign,
    BaseAlign,
    Line,
    Label,
    Text,
    FontUnit,
    Vector,
    Color,
    Circle,
    ScreenElement,
    Font,
    GraphicsGroup, vec, Scene
} from 'excalibur'
import {Resources} from "./resources.js";
import {Tram} from "./tram.js";

// screenelement heeft geen collision, altijd on top, beweegt niet mee met camera
// beperking: je kan alleen text en graphics toevoegen via graphics.add
// geeft warning Excalibur only supports convex polygon colliders
export class UI extends ScreenElement {

    timer = 0
    timerText

    constructor() {
        super({x: 10, y: 10})
    }

    onInitialize(engine) {
        this.timerText = new Text({
            text: `Tijd tot vertrek : ${this.timer}`,
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
                color: Color.Black,
                baseAlign: BaseAlign.Top
            }),
        })

        this.graphics.add(this.timerText)

        this.tram = new Tram()
        this.tram.z = 0

        this.addChild(this.tram)
    }

    resetAll(leveltime, trampos) {

        //remove velocity
        this.tram.vel = new Vector(0,0);

        this.tram.resettram(trampos)
        //reset the timer to the levels variable
        this.timer = leveltime + 1
        this.timerText.text = `Tijd tot vertrek : ${this.timer}`

        //movetram

        this.startTimer()
    }

    startTimer() {
        this.timer --

        //checks if timer is 0
        if (this.timer === 0) {
            //timer ran out
            this.timerText.text = `Je bent te laat`

            //move tram
            this.tram.moveTram()

        }else {
            //timer has not ran out
            console.log(this.timer)
            this.timerText.text = `Tijd tot vertrek : ${this.timer}`
            setTimeout(() => {this.startTimer()}, 1000)
        }
    }
}