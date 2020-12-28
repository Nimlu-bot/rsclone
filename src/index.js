import "./assets/css/style.scss";
import { BaseMarkup, GameField, Header} from "./components/index";
import LvlPage from "./components/lvlPage/lvl-page.component"

const markup = new BaseMarkup();
const gameField = new GameField();
const header = new Header();
const lvlPage = new LvlPage();// добавила!!

markup.init();
gameField.init();
// header.init();
lvlPage.init(); // поменять на запуск по клику

function handler(event) {
    const targetNamesArr=['.lvl-page-lvl', 'ваш-таргет']; // сюда пишем класс элемента, на котором ловим клик
    const toDoArr=[ // сюда пишем, что делать
        gameField.init,
        'ваш-метод'
    ];

 for(let i=0; i<targetNamesArr.length; i+=1) { // ищем в массиве имен таргетов и запускаем соответствующий метод
    if(event.target.closest(targetNamesArr[i])){
        toDoArr[i]();
    }; 
 }
}
document.addEventListener('click', (event) => { handler(event) });