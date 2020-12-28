import { gameFieldTemplate } from "./game-field.template";
import { Game } from "./game/index"; // перенесла в index.js!!
import { headerTemplate } from "../header/header.template";

export class GameField {
    constructor() {
        this.pageName = 'Game';// добавила
        // this.game = new Game;
    }

    init(game) {
        // добавила
        const header = document.querySelector(".header");
        if(header) header.remove();
        const wrapper = document.querySelector(".wrapper");
        wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.pageName));

        const list = document.querySelector(".main");
        list.innerHTML='';
        list.insertAdjacentHTML("beforeend", gameFieldTemplate);
        console.log(game);
        game.init();
    }
}
