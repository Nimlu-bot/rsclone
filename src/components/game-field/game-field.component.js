import { gameFieldTemplate } from "./game-field.template";
import { Game } from "./game/index";
import { headerTemplate } from "../header/header.template";

export class GameField {
    constructor() {
        this.pageName = 'Game';// добавила
        this.game = new Game();
    }

    init() {
        // добавила
        const header = document.querySelector(".header");
        if(header) header.remove();
        const wrapper = document.querySelector(".wrapper");
        wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.pageName));

        const list = document.querySelector(".main");
        list.innerHTML='';
        list.insertAdjacentHTML("beforeend", gameFieldTemplate);
        this.game.init();
    }
}
