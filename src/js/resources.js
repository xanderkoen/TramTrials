import { ImageSource, Loader, Resource } from 'excalibur'
import Achtergrond from '../images/Achtergrond.jpg'
import Grass from '../images/Grass.png'
import Idlesheet from '../images/IdleSpriteSheet.png'
import Walkingsheet from '../images/walkingSheet.png'
import JumpingSheet from '../images/jumpingSpriteSheet.png'
import player from '../images/fish.png'
import grond from '../data/Ground.json'
import tram from '../images/tram.png'
import test from '../images/test.jpg'



const Resources = {
    Player: new ImageSource(player),
    Achtergrond: new ImageSource(Achtergrond),
    Grass: new ImageSource(Grass),
    Idlesheet: new ImageSource(Idlesheet),
    Walkingsheet: new ImageSource(Walkingsheet),
    Tram: new ImageSource(tram),
    Jumpsheet: new ImageSource(JumpingSheet),
    Ground: new ImageSource(Grass),
    GroundData: new Resource(grond, "json"),
    Test: new ImageSource(test),
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
ResourceLoader.suppressPlayButton = true
export { Resources, ResourceLoader }