import {Color, ImageSource, Loader, Resource} from 'excalibur'
import Achtergrond from '../images/Achtergrond2.png'
import Grass from '../images/Grass.png'
import Idlesheet from '../images/IdleSpriteSheet.png'
import Walkingsheet from '../images/walkingSheet.png'
import JumpingSheet from '../images/jumpingSpriteSheet.png'
import player from '../images/fish.png'
import grond from '../data/Ground.json'
import tram from '../images/tram.png'
import test from '../images/test.jpg'
import kaart from '../images/kaart.png'
import logo from '../images/TTLogo.png'
import mainmenu from '../images/Main_Menu.png'
import gameover from '../images/gameove.png'
import trampaal from '../images/trampaal.png'
import tramkabel from '../images/tramkabel.png'
import tramkabelsheet from '../images/tramkabelsheet.png'



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
    Kaart: new ImageSource(kaart),
    MainMenu: new ImageSource(mainmenu),
    Gameover: new ImageSource(gameover),
    Logo: new ImageSource(logo),
    Trampaal: new ImageSource(trampaal),
    Tramkabel: new ImageSource(tramkabel),
    Tramkabelsheet: new ImageSource(tramkabelsheet),
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