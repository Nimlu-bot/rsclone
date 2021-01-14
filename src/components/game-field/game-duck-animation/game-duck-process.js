import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import {duckMove, duckGoAway, duckShot, newDucksParameters} from './game-duck-duck-move';
import {ducksForGame, progressForGame,newProgressParameters} from './game-constants';
import {dog, dogMove, newDogParameters} from './game-dog-animation';
import {showCurrentStatistic} from './game-show-current-statistic-function';

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
const dogObj = dog; // по нем отслеживать запуск уток





function ducksMove(/* level */){
    gameFlag=true;
    pauseFlag=false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    ctx.drawImage(treeGrass, 0, 0, 1008, 724, 0, 80, 800, 600);

    dogMove(ctx,time,ducksMove);// !!!!!!!!!!!!!!!!!!!!!!!собачка

    if(dogObj.scaredDucks) {
        // ускоряем движение

        clearInterval(time.moveIntervalId);
        time.frameTime=90-progress.level*10;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);

        ctx.globalCompositeOperation = 'destination-over';
        if(progress.currentTwoDucksCruck===2){
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
        if(progress.cruckDuck===10){
            
            if (progress.level<=10){
                console.log('NEW LEVEL');
                newDogParameters()
                progress.level+=1;
                progress.cruckDuck=0;
                progress.shotDucks=0;
                progress.goAwayducks=0;
                console.log(`level ${progress.level}`);
                showCurrentStatistic(progress); 
            }else{
                console.log('ALL LEVELS COMPLETE');
                clearInterval(time.moveIntervalId);
    
            }
        }
        if((ducks.duck1.timeAfterStartFly<Math.ceil(200*(80/time.frameTime))) && (progress.bullet!==0)) {
            if(ducks.duck1.isLive){
                    duckMove(ctx, ducks.duck1, ducks);
                    ducks.duck1.timeAfterStartFly+=1;
            } else {
                    duckShot(ducks.duck1, ctx, progress);
            }
        }else{
            duckGoAway(ducks.duck1, ctx, progress);
        }
        if((ducks.duck2.timeAfterStartFly<Math.ceil(200*(80/time.frameTime))) && (progress.bullet!==0) ) {
            if(ducks.duck2.isLive){
                duckMove(ctx, ducks.duck2, ducks);
                ducks.duck2.timeAfterStartFly+=1;
            } else{
                duckShot(ducks.duck2, ctx, progress);
            }
        }else{
            duckGoAway(ducks.duck2, ctx, progress);
        }    
    }
}


function shot(event){
    if(gameFlag && !pauseFlag && progress.bullet>0) progress.bullet-=1;
    console.log(`bullet ${progress.bullet}`);
    if(progress.bullet>0){
            if(!pauseFlag){
                const clickX = event.clientX - canvas.getBoundingClientRect().left;
                const clickY = event.clientY - canvas.getBoundingClientRect().top;

            if((clickX > (ducks.duck1.moveX +5) && clickX < (ducks.duck1.moveX + 101-5)) 
            && ((clickY > (ducks.duck1.moveY +5) && clickY < (ducks.duck1.moveY + 90 -5)))){
                ducks.duck1.isLive=false;
                }
            if((clickX > (ducks.duck2.moveX +5) && clickX < (ducks.duck2.moveX + 101-5)) 
            && ((clickY > (ducks.duck2.moveY +5) && clickY < (ducks.duck2.moveY + 90 -5)))){
                ducks.duck2.isLive=false;
                }
            }   
    
    }
    showCurrentStatistic(progress);
}


export function startGame (context){ // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!export
    canvas = document.querySelector('.game-canvas');
    
    clearInterval(time.moveIntervalId);
    showCurrentStatistic(progress);


    if(context){// запуск начала игры(при продолжении взамен контекста ставлю null)
        newProgressParameters();
        newDogParameters();
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl+=2;
        ctx=context;
    }
    
    if(!pauseFlag){
        newDucksParameters(ducks);
        progress.ducksInCurrentLvl+=2;
    }

    function continueGame(event){
        if(event.target.classList.contains("continue-btn")){
            if (gameFlag) startGame (null);
        }
    }
    
    function pauseGame(){
        if (gameFlag) {
            pauseFlag=true;
            clearInterval(time.moveIntervalId);
            document.body.addEventListener('click', (event)=>continueGame(event));
        }
    
    }
    
    const pauseBtn =document.querySelector('.pause-btn-header');
    if(pauseBtn)pauseBtn.addEventListener('click', ()=>pauseGame());

    time.moveIntervalId= setInterval(()=>ducksMove(/* level */),time.frameTime);

    const main = document.querySelector('.main');
    if(!shotListenerFlag)main.addEventListener('click', (event) => {
        shot(event);
    });
    shotListenerFlag=true;
    
}


