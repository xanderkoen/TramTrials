import {
    Actor,
    Input,
    Vector,
    CollisionType,
    Shape,
    vec,
    SpriteSheet,
    range,
    Animation,
    AnimationStrategy,
} from "excalibur";
import { Resources } from './resources.js'
import {Ticket} from "./ticket.js";

export class Player extends Actor {
    engine;
    game;
    playerAnimations = []
    direction = 'R'
    isOnGround = true


    constructor() {
        super({
            collisionType: CollisionType.Active,
            collider: Shape.Box(60, 120, Vector.Half, vec(0, 0))
        });
    }

    onInitialize(_engine) {
        this.pos = new Vector(400, 400);
        this.anchor = new Vector(0.5, 0.6)
        this.vel = new Vector(0, 0);
        this.scale = new Vector(1, 1)

        let IdleSheet = SpriteSheet.fromImageSource({
            image: Resources.Idlesheet,
            grid: {
                rows: 1,
                columns: 2,
                spriteHeight: 150,
                spriteWidth: 150,
            }
        })

        let WalkSheet = SpriteSheet.fromImageSource({
            image: Resources.Walkingsheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteHeight: 150,
                spriteWidth: 150,
            }
        })

        let JumpSheet = SpriteSheet.fromImageSource({
            image: Resources.Jumpsheet,
            freeze: true,
            grid: {
                rows: 1,
                columns: 3,
                spriteHeight: 150,
                spriteWidth: 150,
            }
        })

        this.playerAnimations['idleSprite'] = Animation.fromSpriteSheet(IdleSheet, range(0, 2), 250);
        this.playerAnimations['walkSprite'] = Animation.fromSpriteSheet(WalkSheet, range(0, 4), 160);
        this.playerAnimations['jumpSprite'] = Animation.fromSpriteSheet(JumpSheet, range(0, 3), 75, AnimationStrategy.Freeze);
        this.game = this.engine;

        //onCollision start
        this.on('collisionstart', (event) => this.onCollision(event))

    }

    onCollision(event) {
            if (event.other instanceof Ticket ) {
                event.other.pickup()
            }
        }

    onPreUpdate(engine, delta) {
        let speedvar = 0;

        //flip animation depending on direction player is facing
        this.playerAnimations["walkSprite"].flipHorizontal = this.direction !== "R";
        this.playerAnimations["idleSprite"].flipHorizontal = this.direction !== "R";

        //determine if the player is jumping
        if (this.vel.y === 0) {
            this.isOnGround = true;
        }

        switch (true) {
            case this.vel.x === 0  && this.isOnGround:
                this.graphics.use(this.playerAnimations['idleSprite'])
            break;

            case this.vel.x !== 0 && this.isOnGround:
                this.graphics.use(this.playerAnimations['walkSprite'])
                break;

            case this.isOnGround === false:
                switch (this.direction) {    //left or right
                    case 'R':
                        this.playerAnimations['jumpSprite'].flipHorizontal = false
                        break;

                    case 'L':
                        this.playerAnimations['jumpSprite'].flipHorizontal = true
                        break;
                }
                this.graphics.use(this.playerAnimations['jumpSprite'])
                break;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.ArrowUp) || engine.input.keyboard.isHeld(Input.Keys.Space)){
            if (this.isOnGround){
                this.playerAnimations['jumpSprite'].reset()
                this.vel.y = -600
                this.isOnGround = false
            }
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)){

            speedvar = -250
            this.direction = "L"
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.ArrowRight)){

            speedvar = 250
            this.direction = "R"

        }

        this.vel.x = speedvar

    }

}