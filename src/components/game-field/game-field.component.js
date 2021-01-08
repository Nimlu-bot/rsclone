import { gameFieldTemplate } from "./game-field.template";
import { Game } from "./game/index";

export class GameField {
    constructor() {
        this.game = new Game();
    }

    init() {
        const list = document.querySelector(".main");
        list.insertAdjacentHTML("beforeend", gameFieldTemplate);
        this.game.init();
    }
}
