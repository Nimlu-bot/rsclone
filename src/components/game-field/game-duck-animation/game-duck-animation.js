// import * as PIXI from 'pixi.js'
import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";

// добавила


// let ctx=document.querySelector(".game-canvas").getContext("2d");
// let img=document.createElement('img');
// img.src='../../../assets/img/duckR.png';
// img.onload=function(){
//     ctx.drawImage(img,0,0, 16, 27, 0, 0, 16, 27);
// }

export function duckFly (ctx){
    const pathX=[];
    const pathY=[];
    let duck1TimeoutId;
    let duck1X;
    let duck1Y;
    let duck1XF;
    let duck1YF;
    let num=0;
    let x=0;
    const duckImgR=document.createElement('img');
    duckImgR.src='../../../assets/img/duckR.png'; 
    const duckImgL=document.createElement('img');
    duckImgL.src='../../../assets/img/duckL.png';
    const duckShotImg=document.createElement('img');
    duckShotImg.src='../../../assets/img/duckD.png'; 
    
    // let type = "WebGL";
    // if(!PIXI.utils.isWebGLSupported()){
    //   type = "canvas"
    // }
    // PIXI.utils.sayHello(type);

    // // Create a Pixi Application
    // const app = new PIXI.Application({
    //     width: 800,
    //     height: 600,
    //     backgroundColor: 0xFFFFFF
    // });
    // app.renderer.autoResize = true;

    // const gameBox=document.querySelector('.canvas-box');
    // gameBox.appendChild(app.view);

    // app.loader.add([
    //     '../../../assets/img/duckR.png',
    //     '../../../assets/img/duckD.png'
    // ]);

    //      function setup() {
    //         const rectangle = new PIXI.Rectangle(303, 0, 101, 90);
    //         const newTex = new PIXI.Texture(app.loader.resources['../../../assets/img/duckR.png'].texture, rectangle);

    //         const duckR = new PIXI.Sprite(
    //             newTex
    //         );
    //         const duckD = new PIXI.Sprite(
    //             app.loader.resources[ '../../../assets/img/duckD.png'].texture
    //         );
    //         duckR.x =100;
    //         duckR.y =100;
    //         app.stage.addChild(duckR);
    //         app.renderer.render(app.stage);
    // }   
    // app.loader.load(setup);
        

    // let k = 0;
    // let b = 0;
    // setInterval(() => {
    //      k = -1*k; 
    //     //  + Math.floor(Math.random() * 3);
    //      b = -1*b + Math.floor(Math.random() * 10);
    //     //  console.log(k);
    //     //  console.log(b);
    // }, 1000);
    const blaBla = [ '2*x+3', '-2*x+200', '200', ''];


    function duckMove(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
        // const duckImg = duck1X < 200 ? duckImgR : duckImgL;
        // duck1X = 200;
        
        // duck1Y =510 - x;

        // if(duck1Y<=0)x=0;

        duck1Y = 510-x;
        const duckImg = duck1X < (400 + 300 * Math.sin(x)) ? duckImgR : duckImgL;
        duck1X =400 + 300 * Math.sin(x);


        ctx.drawImage(duckImg, 101*num, 0, 101, 90, duck1X, duck1Y, 101, 90);
        num+=1;
        x+=5;
        if(num>3)num=0;
        if(x>=CANVAS_WIDTH-100)x=0;
        // requestAnimationFrame(drawDuck);  
        
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
        x=0;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
        ctx.drawImage(duckShotImg, 0, 0, 105, 90, duck1XF, duck1YF, 101, 90);
        duck1TimeoutId = setTimeout(duckFall, 400);
        
    }

    // duckImg.onload=()=>{
    //   const duc1IntervalId = setInterval(duckMove,200);  
    // }
    const duc1IntervalId = setInterval(duckMove,200);

    const canvas = document.querySelector('.game-canvas');

    function shot(event){
        console.log('HI!!!!!!!!!!!!!!!');
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
    }
        );


    canvas.addEventListener('click', (event) => {
        console.log('HI!!!!!!!!!!!!!!!');
        shot(event);
    }
        );



    // let time1Id;
    // function createPath(event){
    //     // clearTimeout(time1Id);
    //     // time1Id = setTimeout(()=> {
    //     //     pathX.push(event.offsetX - canvas.getBoundingClientRect().left);
    //     //     pathY.push(event.offsetX - canvas.getBoundingClientRect().top);
            
    //     // }, 200);
    //         // pathX.push(event.offsetX - canvas.getBoundingClientRect().left);
    //         // pathY.push(event.offsetX - canvas.getBoundingClientRect().top);
    //         pathX.push(event.offsetX);
    //         pathY.push(event.offsetY);

    // }
    // function showPath(){
    //     console.log(pathX);
    //     console.log(pathY);
    // }


    // canvas.addEventListener('mousemove', (event) => createPath(event));
    // canvas.addEventListener('click', showPath);
}