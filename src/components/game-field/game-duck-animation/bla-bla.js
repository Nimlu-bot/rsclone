        // game-field.components

        

    // init(game) {
    //     // добавила
    //     const header = document.querySelector(".header");
    //     if(header) header.remove();
    //     const wrapper = document.querySelector(".wrapper");
    //     wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.pageName));

    //     const list = document.querySelector(".main");
    //     list.innerHTML='';}





    // index.js

//     import "./assets/css/style.scss";
// import { BaseMarkup, GameField, Header} from "./components/index";
// import LvlPage from "./components/lvlPage/lvl-page.component";
// import {Game} from "./components/game-field/game/game.component";

// const markup = new BaseMarkup();
// const game = new Game();// добавила!!
// const gameField = new GameField();
// const header = new Header();
// const lvlPage = new LvlPage();// добавила!!


// markup.init();
// gameField.init(game);
// // header.init();
// lvlPage.init(); // поменять на запуск по клику

// function handler(event) {
//     const targetNamesArr = ['.lvl-page-lvl', 'ваш-таргет']; // сюда пишем класс элемента, на котором ловим клик
//     const toDoArr = [ // сюда пишем, что делать
//         gameField.init,
//         'ваш-метод'
//     ];
//     const argumentsArr = [
//         game,
//         'ваш-аргумент'// если нет аргументов можно добавлять null
//     ]

//  for(let i=0; i<targetNamesArr.length; i+=1) { // ищем в массиве имен таргетов и запускаем соответствующий метод
//     if(event.target.closest(targetNamesArr[i])){
//         console.log(argumentsArr[i]);
//         toDoArr[i](argumentsArr[i]);
//     }; 
//  }
// }
// document.addEventListener('click', (event) => { handler(event) });