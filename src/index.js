import './assets/css/style.scss';
import { BaseMarkup, GameField, Header, Statistics } from './components/index';

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();
// const login = new Login();
const stat = new Statistics();

markup.init();
gameField.init();
header.init();
stat.init();
// login.init();
