const dogImg=document.createElement('img');
dogImg.src='../../../assets/img/pes.png';
let frameNum=0;
let frameString=0;
let frameNumLaught=3;
let dogGoX=0;
let dogGoY=400;
let dogIngrassX=290;
let dogInGrassY=370;
let frameCounter=0;
let frameCounterLaught=0;


export const dog={
    go:true,
    jump:false,
    findOneDuck:false,
    findTwoDucks:false,
    laught:false,
    scaredDucks:false
}

export function dogMove(ctx,time,ducksMove){
    clearInterval(time.moveIntervalId);
    time.frameTime=100;
    // time.frameTime=1000;
    time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);
    if(dog.go){
        dogGoY=410
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(dogImg, 560*frameNum, 390*frameString, 555, 410, dogGoX,  dogGoY, 250, 180);
        if(frameCounter<35){// иначе замирает и принюхивается
            dogGoX+=5;
            frameNum+=1;
            if(frameNum>4)frameNum=0;
        }else{
            frameNum===3 ? frameNum=4 : frameNum=3;
        }
        frameCounter+=1;
        if(frameCounter===45){
            dog.go=false;
            dog.jump=true;
            frameCounter=0;
            frameNum=0;
            console.log('jump');
            dogGoY=350;
        }
    }

    if(dog.jump){
        if(frameCounter===0){
            frameCounter+=1;
        } else{
            ctx.globalCompositeOperation = 'source-over';
            frameString=1;
            if(frameCounter<7){
                ctx.drawImage(dogImg, 560*frameNum, 410*frameString, 560, 600, dogGoX,  dogGoY-20, 264, 270);
            }
            frameCounter+=1;
            if(frameCounter>2){// замерла с поднятыми ушами
                if(frameNum<2)frameNum+=1;
                dogGoX+=10;
                dogGoY-=10;
                if(frameCounter>40){// прыгнула
                console.log('i am jump');
                dog.jump=false;
                dog.scaredDucks=true;
                console.log('ducks scared');
                frameNum=0;
                frameString=0;
                dogGoX=0;
                dogGoY=400;
                frameCounter=0;
                }
            }
        }

    }
    if(dog.findOneDuck){
        clearInterval(time.moveIntervalId);
        time.frameTime=40;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);
        frameString=0;
        frameNum=5
        if(frameCounter<40){
            ctx.drawImage(dogImg, 559*frameNum, 402*frameString, 520, 402, dogIngrassX,  dogInGrassY, 220, 190);
        }
        if(frameCounter<12){
            dogInGrassY-=3;
        }else{
            dogInGrassY+=2;          
        }
        // dogInGrassY-=1;
        frameCounter+=1;
        if(frameCounter===120){
            dog.findOneDuck=false;
            dogIngrassX=290;
            dogInGrassY=370;
            frameCounter=0;
            frameString=0;
            frameNum=0;
            dog.scaredDucks=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
            // dog.go=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
        }
    }
    if(dog.findTwoDucks){
        clearInterval(time.moveIntervalId);
        time.frameTime=30;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);
        frameString=1;
        frameNum=5;
        if(frameCounter<50){
            ctx.drawImage(dogImg, 540*frameNum, 430*frameString, 600, 590, dogIngrassX,  dogInGrassY, 250, 230);
        }
        if(frameCounter<20){
            dogInGrassY-=3;
        }else{
            dogInGrassY+=2;          
        }
        frameCounter+=1; 
        if(frameCounter===120){
            dog.findTwoDucks=false;
            dogIngrassX=290;
            dogInGrassY=370;
            frameCounter=0;
            frameString=0;
            frameNum=0;
            dog.scaredDucks=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
            // dog.go=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
        }
    }
    if(dog.laught){
        clearInterval(time.moveIntervalId);
        time.frameTime=100;
        time.moveIntervalId=setInterval(()=>ducksMove(/* level */),time.frameTime);
        frameString=1;
        if(frameCounterLaught<20){
            ctx.drawImage(dogImg, 540*frameNumLaught, 430*frameString, 500, 590, dogIngrassX,  dogInGrassY-50, 220, 230);
                if(frameCounterLaught<15){
                    dogInGrassY===370 ? dogInGrassY+=10 : dogInGrassY=370;
                }else{
                    dogInGrassY+=10;
                }
        }
        frameNumLaught===3 ? frameNumLaught = 4 : frameNumLaught = 3;
        frameCounterLaught+=1;
        if(frameCounterLaught===50){
            dog.laught=false;
            dogInGrassY=370;
            frameString=0;
            frameCounterLaught=0;
            dog.scaredDucks=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
            // dog.go=true;// условие продолжения игры!!!!!!!!!!!!!!!!!!!!???????????????????????
        }

    }


};