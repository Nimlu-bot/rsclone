// import * as PIXI from 'pixi.js'
// import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";

const duckImgR=document.createElement('img');
duckImgR.src='../../../assets/img/duckR.png'; 
const duckImgL=document.createElement('img');
duckImgL.src='../../../assets/img/duckL.png';
const duckShotImg=document.createElement('img');
duckShotImg.src='../../../assets/img/duckD.png';// застреленная в 1м кадре, падающая во втором
let ctx;
let canvas;

const ducks = {
    duck1:{
        moveX:400,
        moveY:510,
        num:0
    },
    duck2:{
        moveX:350,
        moveY:510,
        num:3
    }
};

function randomWithoutZero(){
    const stepPathChangeArr = [-20, -10, 10, 20];
    return stepPathChangeArr[Math.round(Math.random()*3)];
    
}

function duckMove(duck){// здесь только логика смены направления движения и отрисовка картинки с учетом направления
   
    // отрисовка кадров
     ctx.clearRect(duck.moveX, duck.moveY, 101, 90);
    duck.moveY += duck.randomPathChangeY;
    const duckImg = duck.moveX < duck.moveX+duck.randomPathChangeX ? duckImgR : duckImgL;
    duck.moveX += duck.randomPathChangeX;
    ctx.drawImage(duckImg, 101*duck.num, 0, 101, 90, duck.moveX,  duck.moveY, 101, 90);
    duck.num+=1;
    duck.frameCounter+=1;
    if(duck.num>3)duck.num=0;

    // проверяем столкновение со стеной
    if(duck.moveX<10) duck.randomPathChangeX=Math.abs(randomWithoutZero());
    if( duck.moveY<10) duck.randomPathChangeY=Math.abs(randomWithoutZero());
    if(duck.moveX>690) duck.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());   
    if( duck.moveY>450) duck.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
    // проверяем столкновение летающих уток
    if((Math.max(ducks.duck1.moveY, ducks.duck2.moveY) <= Math.min(ducks.duck1.moveY, ducks.duck2.moveY)+100) 
     && (Math.max(ducks.duck1.moveX, ducks.duck2.moveX) <= Math.min(ducks.duck1.moveX, ducks.duck2.moveX)+110)){
        ducks.duck1.moveY > ducks.duck2.moveY ? ducks.duck1.randomPathChangeY=Math.abs(randomWithoutZero()) : ducks.duck1.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
        ducks.duck2.moveY > ducks.duck1.moveY ? ducks.duck2.randomPathChangeY=Math.abs(randomWithoutZero()) : ducks.duck2.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
        ducks.duck1.moveX > ducks.duck2.moveX ? ducks.duck1.randomPathChangeX=Math.abs(randomWithoutZero()) : ducks.duck1.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());
        ducks.duck2.moveX > ducks.duck1.moveX ? ducks.duck2.randomPathChangeX=Math.abs(randomWithoutZero()) : ducks.duck2.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());
     }
     // проверяем столкновение с падающей уткой
     if(((Math.max(duck.moveY, ducks.duck2.fallY) <= Math.min(duck.moveY, ducks.duck2.fallY)+130) 
     && (Math.max(duck.moveX, ducks.duck2.moveX) <= Math.min(duck.moveX, ducks.duck2.moveX)+130))
     || ((Math.max(duck.moveY, ducks.duck1.fallY) <= Math.min(duck.moveY, ducks.duck1.fallY)+130) 
     && (Math.max(duck.moveX, ducks.duck1.moveX) <= Math.min(duck.moveX, ducks.duck1.moveX)+130))){
        duck.frameCounter=0;
        duck.randomPathChangeX *= (-1);
     }
     // случайная смена направления через заданное количество кадров
    if(duck.frameCounter>10){
        duck.frameCounter=0;
        duck.randomPathChangeY = randomWithoutZero();
        duck.randomPathChangeX = randomWithoutZero();
    }
}

function ducksMove(/* level */){
    ducks.duck1.moveX=400;
    ducks.duck1.moveY=510;
    ducks.duck2.moveX=350;
    ducks.duck2.moveY=510;
    console.log('begin');
    ducks.duck1.intervalId = setInterval(()=>duckMove(ducks.duck1),80);
    ducks.duck2.intervalId = setInterval(()=>duckMove(ducks.duck2),80);

}

function duckFall(duck){                
    if(duck.moveY<600-90){
        ctx.clearRect(duck.fallX, duck.fallY-10, 101, 90);
        ctx.drawImage(duckShotImg, 105, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
        duck.fallY+=10;
        requestAnimationFrame(()=>duckFall(duck)); 
    } else {
        ctx.clearRect(duck.fallX, duck.fallY-10, 101, 90);
    }  
    
}

function duckShot(duck){
    clearTimeout(duck.timeoutId);
    duck.fallX=duck.moveX;
    duck.fallY=duck.moveY;
    duck.moveX=null;
    duck.moveY=null;
    duck.num=0;
    ctx.clearRect(duck.fallX, duck.fallY, 101, 90);
    ctx.drawImage(duckShotImg, 0, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
    duck.timeoutId = setTimeout(()=>duckFall(duck), 400);
    
}


function shot(event){
    const clickX = event.clientX - canvas.getBoundingClientRect().left;
    const clickY = event.clientY - canvas.getBoundingClientRect().top;

    if((clickX > (ducks.duck1.moveX +5) && clickX < (ducks.duck1.moveX + 101-5)) 
    && ((clickY > (ducks.duck1.moveY +5) && clickY < (ducks.duck1.moveY + 90 -5)))){
        clearInterval(ducks.duck1.intervalId);
        duckShot(ducks.duck1);
    }
    if((clickX > (ducks.duck2.moveX +5) && clickX < (ducks.duck2.moveX + 101-5)) 
    && ((clickY > (ducks.duck2.moveY +5) && clickY < (ducks.duck2.moveY + 90 -5)))){
        clearInterval(ducks.duck2.intervalId);
        duckShot(ducks.duck2);
    }
}


export function duckFly (context){ // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!export!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ctx=context;
    ducks.duck1.randomPathChangeY = randomWithoutZero();
    ducks.duck1.randomPathChangeX = randomWithoutZero();
    ducks.duck1.frameCounter = 0;
    ducks.duck2.randomPathChangeY = randomWithoutZero();
    ducks.duck2.randomPathChangeX = randomWithoutZero();
    ducks.duck2.frameCounter = 0;

    ducksMove(/* level */);

    canvas = document.querySelector('.game-canvas');
    canvas.addEventListener('click', (event) => { // не работает из-за меню
        console.log('HI!!!!!!!!!!!!!!!');
        shot(event);
    });

    const main = document.querySelector('.main');// убрать, когда Федя меню починит ! ! !
    main.addEventListener('click', (event) => {
        console.log(event.target);
        shot(event);
    });
}