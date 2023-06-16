import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import Achtergrond from '../images/Achtergrond.jpg'
import Grass from '../images/Grass.jpg'
import Idlesheet from '../images/IdleSpritesheet.png'
import Walkingsheet from '../images/WalkingSpritesheet.png'
import Player from '../images/fish.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Player: new ImageSource(fishImage),
    Achtergrond: new ImageSource(Achtergrond),
    Grass: new ImageSource(Grass),
    Idlesheet: new ImageSource(Idlesheet),
    Walkingsheet: new ImageSource(Walkingsheet)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
ResourceLoader.suppressPlayButton = true
export { Resources, ResourceLoader }