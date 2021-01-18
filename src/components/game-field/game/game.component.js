import { gameTemplate } from "./game.template";
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import { startGame } from "../game-duck-animation/game-duck-process";
// game-duck-animation

export class Game {
    constructor() {
        this.game = "Game";
    }

    init(lvl) {
        const field = document.querySelector(".game-field-main");

        field.insertAdjacentHTML("beforeend", gameTemplate(CANVAS_WIDTH, CANVAS_HEIGTH));
        console.log('canvas created');

        const canvas = document.querySelector(".game-canvas");
        const ctx = canvas.getContext("2d");
        startGame(ctx, lvl);  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}