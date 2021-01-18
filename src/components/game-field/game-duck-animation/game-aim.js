const aimImg=document.createElement('img');
aimImg.src='../../../assets/img/aim.png';

export function aimMove(event, canvasElem, context, pauseFlag){
    const moveX = event.clientX - canvasElem.getBoundingClientRect().left;
    const moveY = event.clientY - canvasElem.getBoundingClientRect().top;
    if(moveX>0 && moveX<800
        && moveY>0 && moveY< 600){
            if(!pauseFlag)context.drawImage(aimImg, moveX-25, moveY-25);
        }
}