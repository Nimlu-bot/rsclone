import "./assets/css/style.scss";
import { BaseMarkup, GameField, Header, AudioProcessor } from "./components/index";

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();
const audioProcessor = new AudioProcessor();

markup.init();
gameField.init();
header.init();
audioProcessor.init();
setTimeout(() => {
  audioProcessor.bark.play();
}, 5000);
setTimeout(() => {
  audioProcessor.stopSound('bark');
}, 10000);

