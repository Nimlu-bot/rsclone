/* eslint-disable no-use-before-define */
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import { duckMove, duckGoAway, duckShot, newDucksParameters } from "./game-duck-duck-move";
import { ducksForGame, progressForGame, newProgressParameters, startGameProgressParameters } from "./game-constants";
import { dog, dogMove, newDogParameters } from "./game-dog-animation";
import { showCurrentStatistic } from "./game-show-current-statistic-function";
import { ModalWindow } from "../../modal-window/modal-window.component";
import { startGameStat, statStart, newRound, isBuletsEnd, isLevelEnd, isWin } from "../../../core/user-statistic";
import { cloudsAdd } from "./game-clouds";
import AudioProcessor from "../../audio-processor/audio-processor.component";
import { changeBkgrnd, changeAnimationColors } from "./game-theme";
import { CondratsBro } from "../../first-pages/psges-list/congratsBro/congrats.component";

const themeNumb = 3;
const treeGrass = document.createElement("img");
treeGrass.src = "../../../assets/img/background_full.png";
const treeGrassChB = document.createElement("img");
treeGrassChB.src = "../../../assets/img/background_fullChB.png";
const treeGrassInv = document.createElement("img");
treeGrassInv.src = "../../../assets/img/background_fullinv.png";
let ctx;
let canvas;
let pauseFlag = false;
let gameFlag = false;
let reloadGameFlag = false;
let lvlbeginStatisticFlag = true; // ! статистика
const time = {
    frameTime: 80,
    moveIntervalId: null
};
let shotListenerFlag = false;
const ducks = ducksForGame;
const progress = progressForGame;
const dogObj = dog;
const reloadEvent = new Event("reloadGameEvent");

function continueGame(event) {
    if (event.target.classList.contains("continue-btn") || event.target.id === "to-main") {
        if (event.target.id === "to-main" && reloadGameFlag) {
            shotListenerFlag = false;
            document.body.dispatchEvent(reloadEvent);
            reloadGameFlag = false;
        } else if (gameFlag && pauseFlag) {
            startGame(null, null); // возвращаемся в игру, не меняя параметры
        }
        pauseFlag = false;
    }
}

document.body.addEventListener("click", (event) => continueGame(event));

function pauseGame() {
    if (gameFlag && !pauseFlag) {
        pauseFlag = true;
        clearInterval(time.moveIntervalId);
        AudioProcessor.pause("intro");
    }
}

// для модальных окон
const modalWindowPerfect = new ModalWindow("perfect");
const modalWindowGameOver = new ModalWindow("game-over");
const congradituate = new CondratsBro();

function showModalWindow() {
    if (progress.shotDucks >= 5) {
        modalWindowPerfect.showWindow();
        newProgressParameters();
        progress.level += 1;
    } else {
        // при проигрыше
        reloadGameFlag = true;
        modalWindowGameOver.showWindow();
        startGameProgressParameters();
    }
    pauseGame();
}

function gameProcess() {
    if (lvlbeginStatisticFlag) startGameStat(); // ! статистика
    lvlbeginStatisticFlag = false; // ! статистика
    gameFlag = true;
    pauseFlag = false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    switch (themeNumb) {
        case 0:
            ctx.drawImage(treeGrass, 0, 0, 1008, 724, 0, 80, CANVAS_WIDTH, CANVAS_HEIGTH);
            break;
        case 1:
        case 3:
            ctx.drawImage(treeGrassChB, 0, 0, 1008, 724, 0, 80, CANVAS_WIDTH, CANVAS_HEIGTH);
            break;
        case 2:
            ctx.drawImage(treeGrassInv, 0, 0, 1008, 724, 0, 80, CANVAS_WIDTH, CANVAS_HEIGTH);
            break;
        default:
            break;
    }

    dogMove(ctx, time, gameProcess, progress, showCurrentStatistic, themeNumb);

    if (dogObj.scaredDucks) {
        // ускоряем движение
        clearInterval(time.moveIntervalId);
        time.frameTime = 85 - progress.level * 7;
        time.moveIntervalId = setInterval(() => gameProcess(), time.frameTime);
        ctx.globalCompositeOperation = "destination-over";
        // если еще не закончилось время и пули
        if (ducks.duck1.timeAfterStartFly < Math.ceil(200 * (80 / time.frameTime)) && progress.bullet !== 0) {
            if (ducks.duck1.isLive) {
                duckMove(ctx, ducks.duck1, ducks, progress, themeNumb);
                ducks.duck1.timeAfterStartFly += 1;
            } else {
                duckShot(ducks.duck1, ctx, progress, themeNumb);
            }
        } else if (ducks.duck1.isLive) {
            duckGoAway(ducks.duck1, ctx, progress, themeNumb, themeNumb);
        }
        if (ducks.duck2.timeAfterStartFly < Math.ceil(200 * (80 / time.frameTime)) && progress.bullet !== 0) {
            if (ducks.duck2.isLive) {
                duckMove(ctx, ducks.duck2, ducks, progress, themeNumb);
                ducks.duck2.timeAfterStartFly += 1;
            } else {
                duckShot(ducks.duck2, ctx, progress, themeNumb);
            }
        } else if (ducks.duck2.isLive) {
            duckGoAway(ducks.duck2, ctx, progress, themeNumb);
        }
        // выбыла пара уток
        if (progress.currentTwoDucksCruck === 2) {
            newRound(); // ! статистика
            if (progress.currentTwoShotDucks === 1) dogObj.findOneDuck = true; // если поймали одну утку
            if (progress.currentTwoShotDucks === 2) dogObj.findTwoDucks = true; // если поймали две утки
            if (progress.currentTwoShotDucks === 0) dogObj.laught = true; // если не поймали ни одной утки
            progress.currentTwoDucksCruck = 0;
            progress.currentTwoShotDucks = 0;
            newDucksParameters(ducks);
            dogObj.scaredDucks = false;
            showCurrentStatistic(progress, themeNumb);
        }
        // конец уровня
        if (progress.cruckDuck === 10) {
            if (isLevelEnd()) {
                // ! статистика
                isWin();
                statStart();
            }
            if (progress.level < 10) {
                showCurrentStatistic(progress, themeNumb);
                showModalWindow();
                newDogParameters(); // для выхода собаки между уровнями
            } else {
                // конец игры
                showCurrentStatistic(progress, themeNumb);
                if (progress.shotDucks < 5) {
                    // проигрыш
                    reloadGameFlag = true;
                    showModalWindow();
                } else {
                    // победа
                    congradituate.init("Поздравляем!", progress.score);
                    document.body.dispatchEvent(reloadEvent);
                }
                startGameProgressParameters();
                pauseGame();
                newDogParameters();
                dogObj.go = false;
                clearInterval(time.moveIntervalId);
            }
        }
    }
    cloudsAdd(ctx, progress.level, themeNumb);
    // changeAnimationColors(ctx, themeNumb); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function shot(event) {
    if (ducks.duck1.isLive || ducks.duck2.isLive) {
        // увеличиваем радиус попадания при увеличении скорости
        let hittingError = 0;
        switch (progress.level) {
            case 6:
                hittingError = 5;
                break;
            case 7:
                hittingError = 10;
                break;
            case 8:
                hittingError = 15;
                break;
            case 9:
                hittingError = 18;
                break;
            case 10:
                hittingError = 20;
                break;
            default:
                break;
        }
        if (gameFlag && !pauseFlag && progress.bullet > 0) {
            progress.bullet -= 1;
            AudioProcessor.reset("shot");
            AudioProcessor.play("shot");
        }
        isBuletsEnd(); // ! статистика
        if (progress.bullet > 0) {
            if (!pauseFlag) {
                const clickX = event.clientX - canvas.getBoundingClientRect().left + 25;
                const clickY = event.clientY - canvas.getBoundingClientRect().top + 25;
                if (clickY < 480) {
                    if (
                        clickX > ducks.duck1.moveX + 5 - hittingError &&
                        clickX < ducks.duck1.moveX + 101 - 5 + hittingError &&
                        clickY > ducks.duck1.moveY + 5 - hittingError &&
                        clickY < ducks.duck1.moveY + 90 - 5 + hittingError
                    ) {
                        ducks.duck1.isLive = false;
                    }
                    if (
                        clickX > ducks.duck2.moveX + 5 - hittingError &&
                        clickX < ducks.duck2.moveX + 101 - 5 + hittingError &&
                        clickY > ducks.duck2.moveY + 5 - hittingError &&
                        clickY < ducks.duck2.moveY + 90 - 5 + hittingError
                    ) {
                        ducks.duck2.isLive = false;
                    }
                }
            }
        }
        showCurrentStatistic(progress, themeNumb);
    }
}

export function startGame(context, lvl) {
    AudioProcessor.pause("breakTime");
    changeBkgrnd(themeNumb); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    showCurrentStatistic(progress, themeNumb);
    canvas = document.querySelector(".game-canvas");
    clearInterval(time.moveIntervalId);
    if (context) {
        // запуск начала игры(при продолжении взамен контекста ставлю null)
        shotListenerFlag = false;
        startGameStat(); // ! статистика
        startGameProgressParameters();
        if (lvl) progress.level = lvl;
        newDogParameters();
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl += 2;
        ctx = context;
        showCurrentStatistic(progress, themeNumb);
    }
    if (!pauseFlag) {
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl += 2;
    }
    const pauseBtn = document.querySelector(".pause-btn-header");
    if (pauseBtn)
        pauseBtn.addEventListener("click", () => {
            pauseGame();
            AudioProcessor.reset("breakTime");
            AudioProcessor.play("breakTime");
        });

    time.moveIntervalId = setInterval(() => gameProcess(), time.frameTime);

    if (!shotListenerFlag) canvas.addEventListener("click", (event) => shot(event));
    shotListenerFlag = true;
}
