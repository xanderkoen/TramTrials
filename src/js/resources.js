import {Color, ImageSource, Loader, Resource} from 'excalibur'
import Achtergrond from '../images/Achtergrond2.png'
import Achtergrond2 from '../images/Achtergrond.png'
import Grass from '../images/Grass.png'
import Steen from '../images/Steen.png'
import Idlesheet from '../images/IdleSpriteSheet.png'
import Walkingsheet from '../images/walkingSheet.png'
import JumpingSheet from '../images/jumpingSpriteSheet.png'
import player from '../images/fish.png'
import grond from '../data/Ground.json'
import grond2 from '../data/Ground2.json'
import tram from '../images/tram.png'
import test from '../images/test.jpg'
import kaart from '../images/kaart.png'
import logo from '../images/TTLogo.png'
import mainmenu from '../images/MainMenu.png'
import gameover from '../images/gameove.png'
import trampaal from '../images/trampaal.png'
import tramkabel from '../images/tramkabel.png'
import tramkabelsheet from '../images/tramkabelsheet.png'
import kaartUI from '../images/chipUI.png'
import souvUI from '../images/souvUI.png'
import pot from '../images/pot.png'
import potcrack from '../images/potcrack.png'



const Resources = {
    Player: new ImageSource(player),
    Achtergrond: new ImageSource(Achtergrond),
    Achtergrond2: new ImageSource(Achtergrond2),
    Grass: new ImageSource(Grass),
    Steen: new ImageSource(Steen),
    Idlesheet: new ImageSource(Idlesheet),
    Walkingsheet: new ImageSource(Walkingsheet),
    Tram: new ImageSource(tram),
    Jumpsheet: new ImageSource(JumpingSheet),
    Ground: new ImageSource(Grass),
    GroundData: new Resource(grond, "json"),
    Ground2Data: new Resource(grond2, "json"),
    Test: new ImageSource(test),
    Kaart: new ImageSource(kaart),
    MainMenu: new ImageSource(mainmenu),
    Gameover: new ImageSource(gameover),
    Logo: new ImageSource(logo),
    Trampaal: new ImageSource(trampaal),
    Tramkabel: new ImageSource(tramkabel),
    Tramkabelsheet: new ImageSource(tramkabelsheet),
    KaartUI: new ImageSource(kaartUI),
    SouvUI: new ImageSource(souvUI),
    Pot: new ImageSource(pot),
    Potcrack: new ImageSource(potcrack),

}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

//pre-load options
ResourceLoader.suppressPlayButton = true
ResourceLoader.backgroundColor = Color.Black
ResourceLoader.loadingBarColor = Color.Yellow
ResourceLoader.logo = logo
export { Resources, ResourceLoader }