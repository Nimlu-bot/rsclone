// import * as PIXI from 'pixi.js'
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";

export function duckFly (ctx){
    let duck1TimeoutId;
    let duck1X=400;
    let duck1Y=510;
    const duck2X=350;
    const duck2Y=510;
    let duck1XF;
    let duck1YF;
    let num=0;
    const duckImgR=document.createElement('img');
    duckImgR.src='../../../assets/img/duckR.png'; 
    const duckImgL=document.createElement('img');
    duckImgL.src='../../../assets/img/duckL.png';
    const duckShotImg=document.createElement('img');
    duckShotImg.src='../../../assets/img/duckD.png'; 
    
 

    function randomWithoutZero(){
        const stepPathChangeArr = [-20, -10, 10, 20];
        return stepPathChangeArr[Math.round(Math.random()*3)];
        
    }

    let randomPathChangeY = randomWithoutZero();
    let randomPathChangeX = randomWithoutZero();
    let frameCounter = 0;


    function duckMove(/* level */){

        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
        duck1Y += randomPathChangeY;
        const duckImg = duck1X < duck1X+randomPathChangeX ? duckImgR : duckImgL;
        duck1X += randomPathChangeX;

        ctx.drawImage(duckImg, 101*num, 0, 101, 90, duck1X, duck1Y, 101, 90);
        num+=1;
        frameCounter+=1;

        if(num>3)num=0;

        if(duck1X<10) randomPathChangeX=Math.abs(randomWithoutZero());
        if(duck1Y<10) randomPathChangeY=Math.abs(randomWithoutZero());
        if(duck1X>690) randomPathChangeX= (-1) * Math.abs(randomWithoutZero());   
        if(duck1Y>450) randomPathChangeY= (-1) * Math.abs(randomWithoutZero());

        if(frameCounter>10){
            frameCounter=0;
            randomPathChangeY = randomWithoutZero();
            randomPathChangeX = randomWithoutZero();
        }
    }
          



    function duckFall(){                
            if(duck1Y<600-90){
                ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
                ctx.drawImage(duckShotImg, 105, 0, 105, 90, duck1XF, duck1YF, 101, 90);
                duck1YF+=10;
                requestAnimationFrame(duckFall); 
            } else {
                ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
            }  
            
    }

    function duckShot(){
        clearTimeout(duck1TimeoutId);
        duck1XF=duck1X;
        duck1YF=duck1Y;
        duck1X=0;
        duck1Y=0;
        num=0;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
        ctx.drawImage(duckShotImg, 0, 0, 105, 90, duck1XF, duck1YF, 101, 90);
        duck1TimeoutId = setTimeout(duckFall, 400);
        
    }


    
    const duc1IntervalId = setInterval(duckMove,80);

    const canvas = document.querySelector('.game-canvas');

    function shot(event){
        const clickX = event.clientX - canvas.getBoundingClientRect().left;
        const clickY = event.clientY - canvas.getBoundingClientRect().top;
        if((clickX > (duck1X +20) && clickX < (duck1X + 101-20)) 
        && ((clickY > (duck1Y +20) && clickY < (duck1Y + 90 -20)))){
            clearInterval(duc1IntervalId);
            duckShot();
        }
    }


    const main = document.querySelector('.main');
    main.addEventListener('click', (event) => {
        console.log(event.target);
        shot(event);
    });


    canvas.addEventListener('click', (event) => {
        console.log('HI!!!!!!!!!!!!!!!');
        shot(event);
    });

}