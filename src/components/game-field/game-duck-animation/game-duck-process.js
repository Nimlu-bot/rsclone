import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import {duckMove, randomWithoutZero, duckGoAway, duckShot, newDucksParameters} from './game-duck-duck-move';
import {ducksForGame, progressForGame} from './game-constants'

const treeGrass=document.createElement('img');
treeGrass.src='../../../assets/img/background_little.png';
let ctx;
let canvas;
let moveIntervalId;
let pauseFlag=false;
let gameFlag=false;

const ducks = ducksForGame;
const progress = progressForGame;


function ducksMove(/* level */){
    pauseFlag=false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    ctx.drawImage(treeGrass, 0, 5);
    ctx.globalCompositeOperation = 'destination-over';
    if(progress.currentTwoDucksCruck===2){
        // console.log('NEW TWO DUCKS');
        // console.log(progress.ducksInCurrentLvl);
        // console.log(progress.cruckDuck);
        // console.log(progress.shotDucks);
        // console.log(progress.goAwayducks);
        // console.log(progress.currentTwoDucksCruck);
        progress.currentTwoDucksCruck=0;
        progress.bullet=4;
        console.log(`new bullet ${progress.bullet}`);
        newDucksParameters(ducks);
    }
    if(progress.cruckDuck===10){
        
        if (progress.level<3){
            console.log('NEW LEVEL');
            progress.level+=1;
            progress.cruckDuck=0;
            progress.shotDucks=0;
            progress.goAwayducks=0;
            console.log(`level ${progress.level}`);
        }else{
            console.log('ALL LEVELS COMPLETE');
            clearInterval(moveIntervalId);

        }
    }
    if(ducks.duck1.timeAfterStartFly<200) {
        if(ducks.duck1.isLive){
                duckMove(ctx, ducks.duck1, ducks);
                ducks.duck1.timeAfterStartFly+=1;
        } else {
                duckShot(ducks.duck1, ctx, progress);
        }
    }else{
        duckGoAway(ducks.duck1, ctx, progress);
    }
    if(ducks.duck2.timeAfterStartFly<200) {
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
}


function continueGame(){
    // pauseFlag=false;
    moveIntervalId= setInterval(()=>ducksMove(/* level */),80);
}

function pauseGame(){
    pauseFlag=true;
    clearInterval(moveIntervalId);
    const continueBtn=document.querySelector('.continue-btn');
    continueBtn.addEventListener('click', continueGame);
}


export function startGame (context){ // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!export
    gameFlag=true;
    clearInterval(moveIntervalId);
    ctx=context;
    newDucksParameters(ducks);

    progress.ducksInCurrentLvl+=2;
    moveIntervalId= setInterval(()=>ducksMove(/* level */),80);

    canvas = document.querySelector('.game-canvas');
    canvas.addEventListener('click', (event) => { // не работает из-за меню;
        shot(event);
    });

    const main = document.querySelector('.main');// убрать, когда Федя меню починит ! ! !
    main.addEventListener('click', (event) => {
        shot(event);
    });

    const pauseBtn =document.querySelector('.pause-btn-header');
    pauseBtn.addEventListener('click', pauseGame);
    
}