import "./assets/css/style.scss";
import { BaseMarkup, GameField, Header } from "./components/index";

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();

markup.init();
gameField.init();
header.init();
