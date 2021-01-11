import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";
import {duckMove, randomWithoutZero} from './game-duck-duck-move';


const duckShotImg=document.createElement('img');
duckShotImg.src='../../../assets/img/duckD.png';// застреленная в 1м кадре, падающая во втором
const treeGrass=document.createElement('img');
treeGrass.src='../../../assets/img/background_little.png';
let ctx;
let canvas;
let moveIntervalId;
let pauseFlag=false;

const ducks = {
    duck1:{
        isLive:true,
        moveX:400,
        moveY:510,
        fallY:0,
        fallX:0,
        num:0,
        timeAfterDeath:0
    },
    duck2:{
        isLive:true,
        moveX:350,
        moveY:510,
        fallY:0,
        fallX:0,
        num:3,
        timeAfterDeath:0
    }
};

function duckFall(duck){             
    if(duck.moveY<600-90){
        ctx.drawImage(duckShotImg, 105, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
        duck.fallY+=50;
    }
}

function duckShot(duck){
    console.log(duck.timeAfterDeath);
    duck.isLive=false
    if(duck.moveX!==null)duck.fallX=duck.moveX;
    if(duck.moveY!==null)duck.fallY=duck.moveY;
    duck.moveX=null;
    duck.moveY=null;
    // duck.num=0;
    if(duck.timeAfterDeath<4){
        ctx.drawImage(duckShotImg, 0, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
        duck.timeAfterDeath+=1;
    }else{
        duckFall(duck);
    }
}

function ducksMove(/* level */){
    pauseFlag=false;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    // отрисовываем фон
    ctx.drawImage(treeGrass, 0, 5);
    ctx.globalCompositeOperation = 'destination-over';
    if(ducks.duck1.isLive){
        duckMove(ctx, ducks.duck1, ducks);
    } else {
        duckShot(ducks.duck1);
    }
    if(ducks.duck2.isLive){
        duckMove(ctx, ducks.duck2, ducks);
    } else{
        duckShot(ducks.duck2);
    }
}


function shot(event){
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
    clearInterval(moveIntervalId);
    ctx=context;
    ducks.duck1.timeAfterDeath=0;
    ducks.duck2.timeAfterDeath=0;
    ducks.duck1.isLive=true;
    ducks.duck2.isLive=true;
    ducks.duck1.moveX=400 + randomWithoutZero();
    ducks.duck1.moveY=510;
    ducks.duck2.moveX=350 + randomWithoutZero();
    ducks.duck2.moveY=510;
    // устанавливаем случайное направление для уток
    ducks.duck1.randomPathChangeY = randomWithoutZero();
    ducks.duck1.randomPathChangeX = randomWithoutZero();
    // ducks.duck1.frameCounter = 0;
    ducks.duck2.randomPathChangeY = randomWithoutZero();
    ducks.duck2.randomPathChangeX = randomWithoutZero();
    // ducks.duck2.frameCounter = 0;

    moveIntervalId= setInterval(()=>ducksMove(/* level */),80);

    canvas = document.querySelector('.game-canvas');
    canvas.addEventListener('click', (event) => { // не работает из-за меню;
        shot(event);
    });

    const main = document.querySelector('.main');// убрать, когда Федя меню починит ! ! !
    main.addEventListener('click', (event) => {
        shot(event);
    });

    const pauseBtn =document.querySelector('.pause-btn');
    pauseBtn.addEventListener('click', pauseGame);
    
}