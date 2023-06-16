import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import Achtergrond from '../images/Achtergrond.jpg'
import Grass from '../images/Grass.jpg'
import Idlesheet from '../images/IdleSpritesheet.png'
import Walkingsheet from '../images/WalkingSpritesheet.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Achtergrond: new ImageSource(Achtergrond),
    Grass: new ImageSource(Grass),
    Idlesheet: new ImageSource(Idlesheet),
    Walkingsheet: new ImageSource(Walkingsheet)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Achtergrond,
    Resources.Grass,
    Resources.Idlesheet,
    Resources.Walkingsheet
])

export { Resources, ResourceLoader }