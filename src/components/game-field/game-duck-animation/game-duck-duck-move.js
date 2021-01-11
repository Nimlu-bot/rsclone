const duckImgR=document.createElement('img');
duckImgR.src='../../../assets/img/duckR.png';
const duckImgL=document.createElement('img');
duckImgL.src='../../../assets/img/duckL.png';
const duckGoAw=document.createElement('img');
duckGoAw.src='../../../assets/img/duckGo.png';

// функция для рандомного изменения направления
export function randomWithoutZero(){
    const stepPathChangeArr = [-20, -10, 10, 20];
    return stepPathChangeArr[Math.round(Math.random()*3)];
    
}

// здесь только логика смены направления движения и отрисовка картинки с учетом направления
export function duckMove(ctx,duck,ducks){
    // отрисовка кадров
    duck.moveY += duck.randomPathChangeY;
    const duckImg = duck.moveX < duck.moveX+duck.randomPathChangeX ? duckImgR : duckImgL;
    duck.moveX += duck.randomPathChangeX;
    ctx.drawImage(duckImg, 101*duck.num, 0, 101, 90, duck.moveX,  duck.moveY, 101, 90);
    duck.num+=1;
    // duck.frameCounter+=1;
    if(duck.num>3)duck.num=0;

    // проверяем столкновение со стеной
    if(duck.moveX<10) duck.randomPathChangeX=Math.abs(randomWithoutZero());
    if( duck.moveY<10) duck.randomPathChangeY=Math.abs(randomWithoutZero());
    if(duck.moveX>690) duck.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());   
    if( duck.moveY>380) duck.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
    // проверяем столкновение летающих уток
    if((Math.max(ducks.duck1.moveY, ducks.duck2.moveY) <= Math.min(ducks.duck1.moveY, ducks.duck2.moveY)+100) 
     && (Math.max(ducks.duck1.moveX, ducks.duck2.moveX) <= Math.min(ducks.duck1.moveX, ducks.duck2.moveX)+110)){
        ducks.duck1.moveY > ducks.duck2.moveY ? ducks.duck1.randomPathChangeY=Math.abs(randomWithoutZero()) : ducks.duck1.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
        ducks.duck2.moveY > ducks.duck1.moveY ? ducks.duck2.randomPathChangeY=Math.abs(randomWithoutZero()) : ducks.duck2.randomPathChangeY= (-1) * Math.abs(randomWithoutZero());
        ducks.duck1.moveX > ducks.duck2.moveX ? ducks.duck1.randomPathChangeX=Math.abs(randomWithoutZero()) : ducks.duck1.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());
        ducks.duck2.moveX > ducks.duck1.moveX ? ducks.duck2.randomPathChangeX=Math.abs(randomWithoutZero()) : ducks.duck2.randomPathChangeX= (-1) * Math.abs(randomWithoutZero());
     }
     // случайная смена направления через заданное количество кадров
    // if(duck.frameCounter>30){
    //     duck.frameCounter=0;
    //     duck.randomPathChangeY = randomWithoutZero();
    //     duck.randomPathChangeX = randomWithoutZero();
    // }
}

export function duckGoAway(duck,ctx){
    duck.isLive=false;
    if(duck.moveX!==null)duck.goAwX=duck.moveX;
    if(duck.moveY!==null)duck.goAwY=duck.moveY;
    duck.moveX=null;
    duck.moveY=null;
    if(duck.goAwY>-80){
        ctx.drawImage(duckGoAw, 100*duck.num, 0, 100,  90, duck.goAwX, duck.goAwY, 100, 90);
        duck.num+=1;
        if(duck.num>3)duck.num=0;
        duck.goAwY-=10;
    }

}

