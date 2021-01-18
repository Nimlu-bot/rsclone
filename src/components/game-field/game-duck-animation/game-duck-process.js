/* eslint-disable no-use-before-define */
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import {duckMove, duckGoAway, duckShot, newDucksParameters} from './game-duck-duck-move';
import {ducksForGame, progressForGame, newProgressParameters, startGameProgressParameters} from './game-constants';
import {dog, dogMove, newDogParameters} from './game-dog-animation';
import {showCurrentStatistic} from './game-show-current-statistic-function';
import { ModalWindow } from "../../modal-window/modal-window.component";


const treeGrass=document.createElement('img');
treeGrass.src='../../../assets/img/background_full.png';
let ctx;
let canvas;
let pauseFlag=false;
let gameFlag=false;
const time={
    frameTime:80,
    moveIntervalId:null
}
let shotListenerFlag=false;
const ducks = ducksForGame;
const progress = progressForGame;
const dogObj = dog;

function continueGame(event){
    if(event.target.classList.contains("continue-btn")||event.target.id==='to-main'){
        if (gameFlag) startGame(null, null);// возвращаемся в игру, не меняя параметры
    }
}

function pauseGame(){
    if (gameFlag) {
        pauseFlag=true;
        clearInterval(time.moveIntervalId);
        document.body.addEventListener('click', (event)=>continueGame(event));
    }
}

// для модальных окон
const modalWindowPerfect=new ModalWindow('perfect');
const modalWindowGameOver=new ModalWindow('game-over');

function showModalWindow(){
        if(progress.shotDucks>=5){
            modalWindowPerfect.showWindow();
            newProgressParameters();
            progress.level+=1;
        }else{
            modalWindowGameOver.showWindow();
            startGameProgressParameters();// Обнуляем очки
        }
        pauseGame();
}

function ducksMove(){
    gameFlag=true;
    pauseFlag=false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    ctx.drawImage(treeGrass, 0, 0, 1008, 724, 0, 80, CANVAS_WIDTH, CANVAS_HEIGTH);

    dogMove(ctx,time,ducksMove);// !!!!!!!!!!!!!!!!!!!!!!!собачка

    if(dogObj.scaredDucks) {
        // ускоряем движение
        clearInterval(time.moveIntervalId);
        time.frameTime=85-progress.level*7;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);

        ctx.globalCompositeOperation = 'destination-over';


        if((ducks.duck1.timeAfterStartFly<Math.ceil(200*(80/time.frameTime))) && (progress.bullet!==0)) {
            if(ducks.duck1.isLive){
                    duckMove(ctx, ducks.duck1, ducks);
                    ducks.duck1.timeAfterStartFly+=1;
            } else {
                    duckShot(ducks.duck1, ctx, progress);
            }
        }else if(ducks.duck1.isLive){
            duckGoAway(ducks.duck1, ctx, progress);
        }
        if((ducks.duck2.timeAfterStartFly<Math.ceil(200*(80/time.frameTime))) && (progress.bullet!==0) ) {// если еще не закончилось время и пули
            if(ducks.duck2.isLive){
                duckMove(ctx, ducks.duck2, ducks);
                ducks.duck2.timeAfterStartFly+=1;
            } else{
                duckShot(ducks.duck2, ctx, progress);
            }
        }else if(ducks.duck2.isLive){
            duckGoAway(ducks.duck2, ctx, progress);
        }
        if(progress.currentTwoDucksCruck===2){// выбыла пара уток
            if(progress.currentTwoShotDucks===1)dogObj.findOneDuck=true;// если поймали одну утку
            if(progress.currentTwoShotDucks===2)dogObj.findTwoDucks=true;// если поймали две утки
            if(progress.currentTwoShotDucks===0)dogObj.laught=true;// если не поймали ни одной утки
            progress.currentTwoDucksCruck=0;
            progress.currentTwoShotDucks=0;
            progress.bullet=4;
            console.log(`new bullet ${progress.bullet}`);
            newDucksParameters(ducks);
            dogObj.scaredDucks=false;
            showCurrentStatistic(progress);
        }
        if(progress.cruckDuck===10){// конец уровня
            if (progress.level<10){
                showModalWindow();
                newDogParameters(); // для выхода собаки между уровнями
                showCurrentStatistic(progress); 
            }else{// конец игры
                console.log('ALL LEVELS COMPLETE');
                clearInterval(time.moveIntervalId);
    
            }
        }
    }
}

function shot(event){
    // увеличиваем радиус попадания при увеличении скорости
    let hittingError=0;
    switch (progress.level) {
        case 6:
            hittingError=5;
            break;
        case 7:
            hittingError=10;
            break;
        case 8:
            hittingError=15;
            break;
        case 9:
            hittingError=18;
            break;
        case 10:
            hittingError=20;
            break;
        default:
            break;
    }
    if(gameFlag && !pauseFlag && progress.bullet>0) progress.bullet-=1;
    console.log(`bullet ${progress.bullet}`);
    if(progress.bullet>0){
            if(!pauseFlag){
                const clickX = event.clientX - canvas.getBoundingClientRect().left;
                const clickY = event.clientY - canvas.getBoundingClientRect().top;

            if((clickX > (ducks.duck1.moveX +5) && clickX < (ducks.duck1.moveX + 101-5+hittingError)) 
            && ((clickY > (ducks.duck1.moveY +5) && clickY < (ducks.duck1.moveY + 90 -5+hittingError)))){
                ducks.duck1.isLive=false;
                }
            if((clickX > (ducks.duck2.moveX +5) && clickX < (ducks.duck2.moveX + 101-5+hittingError)) 
            && ((clickY > (ducks.duck2.moveY +5) && clickY < (ducks.duck2.moveY + 90 -5+hittingError)))){
                ducks.duck2.isLive=false;
                }
            }   
    
    }
    showCurrentStatistic(progress);
}


export function startGame (context, lvl){ // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!export
    canvas = document.querySelector('.game-canvas');
    clearInterval(time.moveIntervalId);
    showCurrentStatistic(progress);

    if(context){// запуск начала игры(при продолжении взамен контекста ставлю null)
        startGameProgressParameters();
        if(lvl) progress.level=lvl;
        newDogParameters();
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl+=2;
        ctx=context;
    }
    
    if(!pauseFlag){
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl+=2;
    }
    
    const pauseBtn =document.querySelector('.pause-btn-header');
    if(pauseBtn)pauseBtn.addEventListener('click', ()=>pauseGame());

    time.moveIntervalId= setInterval(()=>ducksMove(/* level */),time.frameTime);

    const main = document.querySelector('.main');
    if(!shotListenerFlag)main.addEventListener('click', (event) =>shot(event));
    shotListenerFlag=true;
    
}


