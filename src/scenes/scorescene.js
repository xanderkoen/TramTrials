import {BaseAlign, Color, Font, FontUnit, Label, Scene, Text, Vector,} from "excalibur";
import {Resources} from "../js/resources";


export class Scorescene extends Scene {
    game;
    levelint = 0

    constructor() {
        super({displayMode: 'FitScreenAndFill'});
    }

    onInitialize(engine) {
        this.game = engine;

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: 'Je had nog 1 seconde over \N Souvenir opgepakt : Ja',
            pos: new Vector(250, 50),
        })

        this.add(this.textScore)

    }



}