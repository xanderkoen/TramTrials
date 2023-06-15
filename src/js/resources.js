import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import Achtergrond from '../images/Achtergrond.jpg'
import Grass from '../images/Grass.jpg'

const Resources = {
    Fish: new ImageSource(fishImage),
    Achtergrond: new ImageSource(Achtergrond),
    Grass: new ImageSource(Grass),
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Achtergrond,
    Resources.Grass,
])

export { Resources, ResourceLoader }