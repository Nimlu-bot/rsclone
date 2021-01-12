import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import {duckMove, duckGoAway, duckShot, newDucksParameters} from './game-duck-duck-move';
import {ducksForGame, progressForGame} from './game-constants';
import {dog, dogMove} from './game-dog-animation';

const treeGrass=document.createElement('img');
treeGrass.src='../../../assets/img/background_full.png';
let ctx;
let canvas;
let moveIntervalId;
let pauseFlag=false;
let gameFlag=false;
const time={
    frameTime:80,
    moveIntervalId:null
}


const ducks = ducksForGame;
const progress = progressForGame;
const dogObj = dog; // по нем отслеживать запуск уток


function ducksMove(/* level */){
    pauseFlag=false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    ctx.drawImage(treeGrass, 0, 0, 1008, 724, 0, 80, 800, 600);
    

    dogMove(ctx,time,ducksMove);// !!!!!!!!!!!!!!!!!!!!!!!собачка

    if(dogObj.scaredDucks) {
        // ускоряем движение
        clearInterval(time.moveIntervalId);
        time.frameTime=80;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);

        ctx.globalCompositeOperation = 'destination-over';
        if(progress.currentTwoDucksCruck===2){
            // console.log('NEW TWO DUCKS');
            // console.log(progress.ducksInCurrentLvl);
            // console.log(progress.cruckDuck);
            // console.log(progress.shotDucks);
            // console.log(progress.goAwayducks);
            // console.log(progress.currentTwoDucksCruck)
            if(progress.currentTwoShotDucks===1)dogObj.findOneDuck=true;// если поймали одну утку
            if(progress.currentTwoShotDucks===2)dogObj.findTwoDucks=true;// если поймали две утки
            if(progress.currentTwoShotDucks===0)dogObj.laught=true;// если не поймали ни одной утки
            
            progress.currentTwoDucksCruck=0;
            progress.currentTwoShotDucks=0;
            progress.bullet=4;
            console.log(`new bullet ${progress.bullet}`);
            newDucksParameters(ducks);
            dogObj.scaredDucks=false; //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // dogObj.go=true;//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
                clearInterval(time.moveIntervalId);
    
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
    time.moveIntervalId= setInterval(()=>ducksMove(/* level */),80);
}

function pauseGame(){
    pauseFlag=true;
    clearInterval(time.moveIntervalId);
    const continueBtn=document.querySelector('.continue-btn');
    continueBtn.addEventListener('click', continueGame);
}


export function startGame (context){ // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!export
    canvas = document.querySelector('.game-canvas');
    gameFlag=true;
    clearInterval(time.moveIntervalId);
    ctx=context;
    newDucksParameters(ducks);

    
    
        progress.ducksInCurrentLvl+=2;
        // moveIntervalId= setInterval(()=>ducksMove(/* level */),80);
        time.moveIntervalId= setInterval(()=>ducksMove(/* level */),time.frameTime);
    
        

    
    // canvas.addEventListener('click', (event) => { // не работает из-за меню;
    //     shot(event);
    // });
    const main = document.querySelector('.main');// убрать, когда Федя меню починит?
    main.addEventListener('click', (event) => {
        shot(event);
    });

    const pauseBtn =document.querySelector('.pause-btn');
    pauseBtn.addEventListener('click', pauseGame);
    
}