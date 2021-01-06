import './assets/css/style.scss';
import { BaseMarkup, GameField, Header, Login } from './components/index';

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();
const login = new Login();

markup.init();
gameField.init();
header.init();
login.init();
