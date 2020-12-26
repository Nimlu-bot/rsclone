import "./assets/css/style.scss";
import { BaseMarkup, GameField } from "./components/index";

const markup = new BaseMarkup();
const gameField = new GameField();

markup.init();
gameField.init();
