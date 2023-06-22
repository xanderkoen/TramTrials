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
import {Ticket} from "./ticket.js";

// screenelement heeft geen collision, altijd on top, beweegt niet mee met camera
// beperking: je kan alleen text en graphics toevoegen via graphics.add
// geeft warning Excalibur only supports convex polygon colliders
export class Collectibles extends ScreenElement {

   collectibles

    constructor() {
        super({x: 1100, y: 10})
    }

    ticket
    souvenir

    onInitialize(engine) {

       //add collectibles logos to UI
        this.ticket = new GraphicsGroup({
            members: [
                {
                    name: "sex",
                    graphic: Resources.Test.toSprite(),
                    pos: new Vector(0,0),
                }
            ]
        })


        this.souvenir = new GraphicsGroup({
            members: [
                {
                    name: 'sex2',
                    graphic: Resources.Test.toSprite(),
                    pos: new Vector(Resources.Test.width + 200,0),
                }
            ]
        })
        this.ticket.scale = new Vector(0.1,0.1)
        this.graphics.add(this.ticket)
        this.graphics.hide(this.ticket)
        this.souvenir.scale = new Vector(0.1,0.1)
        this.graphics.add(this.souvenir)
        this.graphics.hide(this.souvenir)
    }

    PickupTicket() {
        //show on UI
        this.graphics.show(this.ticket)
    }

    PickupSouvenir() {
       this.graphics.show(this.souvenir)
    }

    ResetCollectiblesUI() {
       this.graphics.hide(this.ticket)

        this.graphics.hide(this.souvenir)
    }


}