import {Actor, Input, Vector,} from "excalibur";
import { Resources } from './resources.js'

export class Player extends Actor {
    engine;
    game;
    direction = 'R'
    isJumping = false
    isOnGround = true


    // constructor() {
    //     super({
    //         collisionType: CollisionType.Active,
    //         collider: Shape.Box(20, 40, Vector.Half, vec(0, 0))
    //     });
    // }

    onInitialize(_engine) {
        // this.game = _engine
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);

        this.game = this.engine;


    }



    onPreUpdate(engine, delta) {
        let speedvar = 0

        if (this.vel.y === 0) {
            this.isJumping = false
            this.isOnGround = true
        }
        else {
            this.isOnGround = false
            this.isJumping = true
        }

        // if  (this.pos.y > 1500) {
        //     this.Lives--
        //
        //     console.log(this.Lives)
        //
        //     // if (this.Lives === 0){
        //     //
        //     //     this.Lives = 1
        //     //     this.game.currentScene.resetPlayer()
        //     //     this.game.currentScene.uivar.updatelife(this.Lives)
        //     //     // let verzameld = this.game.currentScene.uivar.score
        //     //     // engine.goToScene('gameOver', {bananscore: verzameld})
        //     // }
        //     // else{
        //     //     this.game.currentScene.resetPlayer()
        //     //     this.game.currentScene.uivar.updatelife(this.Lives)
        //     // }
        // }

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.ArrowUp) || engine.input.keyboard.isHeld(Input.Keys.Space)){ // Jump or move up
            if (this.isOnGround){
                //console.log("jump");
                this.vel.y = -600
            }
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)){ // Jump or move up
            //console.log("links");
            speedvar = -250
            this.direction = "L"
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.ArrowRight)){ // Jump or move up
            //console.log("Rechts");
            speedvar = 250
            this.direction = "R"

        }

        this.vel.x = speedvar

    }

}