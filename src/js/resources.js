import { ImageSource, Loader, Resource } from 'excalibur'
import Achtergrond from '../images/Achtergrond.jpg'
import Grass from '../images/Grass.jpg'
import Idlesheet from '../images/IdleSpriteSheet.png'
import Walkingsheet from '../images/walkSheet.png'
import JumpingSheet from '../images/jumpingSpriteSheet.png'
import player from '../images/fish.png'
import grond from '../data/Ground.json'



const Resources = {
    Player: new ImageSource(player),
    Achtergrond: new ImageSource(Achtergrond),
    Grass: new ImageSource(Grass),
    Idlesheet: new ImageSource(Idlesheet),
    Walkingsheet: new ImageSource(Walkingsheet),
    Jumpsheet: new ImageSource(JumpingSheet),
    Ground: new ImageSource(Grass),
    GroundData: new Resource(grond, "json"),
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
ResourceLoader.suppressPlayButton = true
export { Resources, ResourceLoader }