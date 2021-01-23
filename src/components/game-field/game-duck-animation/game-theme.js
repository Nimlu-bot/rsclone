import { CANVAS_HEIGTH, CANVAS_WIDTH } from "../../../core/index";

export function changeBkgrnd(theme) {
    const bkgrnd = document.querySelector(".game-field-main");
    switch (theme) {
        case 1:
            bkgrnd.style.background = "#FFFFFF";
            break;
        case 2:
        case 3:
            bkgrnd.style.background = "#000000";
            break;
        default:
            break;
    }
}
export function changeAnimationColors(ctx, theme) {
    // var c=document.getElementById("myCanvas");
    // var ctx=c.getContext("2d");
    // var img=document.getElementById("scream");
    // ctx.drawImage(img,0,0);
    // var imgData=ctx.getImageData(0,0,c.width,c.height);

    // // инвертироват цвета
    // for (var i=0; i<imgData.data.length; i+=4)
    //  {
    //    imgData.data[i]=255-imgData.data[i];
    //    imgData.data[i+1]=255-imgData.data[i+1];
    //    imgData.data[i+2]=255-imgData.data[i+2];
    //    imgData.data[i+3]=255;
    //  }

    // ctx.putImageData(imgData,0,0);

    const imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    const pixels = imageData.data;
    const numPixels = pixels.length;
    if (theme === 1 || theme === 3) {
        for (let i = 0; i < numPixels; i += 1) {
            const average = (pixels[i * 4] + pixels[i * 4 + 1] + pixels[i * 4 + 2]) / 3;
            // set red green and blue pixels to the average value
            pixels[i * 4] = average;
            pixels[i * 4 + 1] = average;
            pixels[i * 4 + 2] = average;
        }
        ctx.putImageData(imageData, 0, 0);
    }
    if (theme === 2) {
        for (let i = 0; i < numPixels; i += 1) {
            const average = (pixels[i * 4] + pixels[i * 4 + 1] + pixels[i * 4 + 2]) / 3;
            // set red green and blue pixels to the average value
            pixels[i * 4] = average;
            pixels[i * 4 + 1] = average;
            pixels[i * 4 + 2] = average;
        }
        for (let i = 0; i < numPixels; i += 4) {
            pixels[i] = 255 - pixels[i];
            pixels[i + 1] = 255 - pixels[i + 1];
            pixels[i + 2] = 255 - pixels[i + 2];
        }
        ctx.putImageData(imageData, 0, 0);
    }
}
