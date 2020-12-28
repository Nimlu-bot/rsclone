import "./assets/css/style.scss";
import { BaseMarkup, GameField, Header} from "./components/index";
import LvlPage from "./components/lvlPage/lvlPage"

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();
const lvlPage = new LvlPage();// добавила!!

markup.init();
gameField.init();
header.init();
lvlPage.init(); // поменять на запуск по клику