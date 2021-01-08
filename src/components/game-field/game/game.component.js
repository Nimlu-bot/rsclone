import { gameTemplate } from "./game.template";
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import { duckFly } from "../game-duck-animation/game-duck-animation";
// game-duck-animation

export class Game {
    constructor() {
        this.game = "Game";
    }

    init() {
        const field = document.querySelector(".game-field-main");

        field.insertAdjacentHTML("beforeend", gameTemplate(CANVAS_WIDTH, CANVAS_HEIGTH));

        const canvas = document.querySelector(".game-canvas");
        const ctx = canvas.getContext("2d");
        // ctx.fillStyle = "green";
        // ctx.fillRect(10, 10, 100, 100);
        duckFly(ctx);
    }
}