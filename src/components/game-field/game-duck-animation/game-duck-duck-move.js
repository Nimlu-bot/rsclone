const duckImgR=document.createElement('img');
duckImgR.src='../../../assets/img/duckR.png';
const duckImgL=document.createElement('img');
duckImgL.src='../../../assets/img/duckL.png';
const duckGoAw=document.createElement('img');
duckGoAw.src='../../../assets/img/duckGo.png';
const duckShotImg=document.createElement('img');
duckShotImg.src='../../../assets/img/duckD.png';// застреленная в 1м кадре, падающая во втором

// функция для рандомного изменения направления
export function randomWithoutZero(){
    // const stepPathChangeArr = [-20, -10, 10, 20];
    const stepPathChangeArr = [-5, -10, 10, 5];
    return stepPathChangeArr[Math.round(Math.random()*3)];
    
}

// обнуляем некоторые параметры
export function newDucksParameters(ducks){
    ducks.duck1.timeAfterStartFly=0;
    ducks.duck2.timeAfterStartFly=0;
    ducks.duck1.duckFall=false;
    ducks.duck2.duckFall=false;
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
    ducks.duck2.randomPathChangeY = randomWithoutZero();
    ducks.duck2.randomPathChangeX = randomWithoutZero();
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
}

export function duckGoAway(duck,ctx, progress){
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
    }else{
        progress.currentTwoDucksCruck+=1;
        progress.goAwayducks+=1;
        console.log(`goAwayducks ${progress.goAwayducks}`);
        progress.cruckDuck+=1;
    }

}

export function duckFall(duck, ctx, progress){             
    if(!duck.duckFall && duck.fallY<510){
        ctx.drawImage(duckShotImg, 105, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
        duck.fallY+=50;
    } else if(!duck.duckFall){
        duck.duckFall=true;
        progress.currentTwoDucksCruck+=1;
        progress.shotDucks+=1;
        console.log(`shotDucks ${progress.shotDucks}`);
        progress.cruckDuck+=1;
       
    }
}

export function duckShot(duck, ctx, progress){
        duck.isLive=false;
        if(duck.moveX!==null){
    
            // progress.currentTwoDucksCruck+=1;
            duck.fallX=duck.moveX;
        }
        if(duck.moveY!==null)duck.fallY=duck.moveY;
        duck.moveX=null;
        duck.moveY=null;
        if(duck.timeAfterDeath<4){
            ctx.drawImage(duckShotImg, 0, 0, 105, 90, duck.fallX, duck.fallY, 101, 90);
            duck.timeAfterDeath+=1;
        }else{
            duckFall(duck, ctx, progress);
        }
}

