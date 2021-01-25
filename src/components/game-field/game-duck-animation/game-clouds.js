const cloud1 = document.createElement("img");
cloud1.src = "../../../assets/img/cloud1.png";

const cloud2 = document.createElement("img");
cloud2.src = "../../../assets/img/cloud2.png";

const cloud3 = document.createElement("img");
cloud3.src = "../../../assets/img/cloud3.png";

const cloud5 = document.createElement("img");
cloud5.src = "../../../assets/img/cloud5.png";

const cloud7 = document.createElement("img");
cloud7.src = "../../../assets/img/cloud7.png";

const cloud8 = document.createElement("img");
cloud8.src = "../../../assets/img/cloud8.png";

const cloud9 = document.createElement("img");
cloud9.src = "../../../assets/img/cloud4_little.png";

const cloud1chB = document.createElement("img");
cloud1chB.src = "../../../assets/img/cloud1chB.png";

const cloud2chB = document.createElement("img");
cloud2chB.src = "../../../assets/img/cloud2chB.png";

const cloud3chB = document.createElement("img");
cloud3chB.src = "../../../assets/img/cloud3chB.png";

const cloud5chB = document.createElement("img");
cloud5chB.src = "../../../assets/img/cloud5chB.png";

const cloud7chB = document.createElement("img");
cloud7chB.src = "../../../assets/img/cloud7chB.png";

const cloud8chB = document.createElement("img");
cloud8chB.src = "../../../assets/img/cloud8chB.png";

const cloud9chB = document.createElement("img");
cloud9chB.src = "../../../assets/img/cloud4_littleChB.png";

const cloud1inv = document.createElement("img");
cloud1inv.src = "../../../assets/img/cloud1inv.png";

const cloud2inv = document.createElement("img");
cloud2inv.src = "../../../assets/img/cloud2inv.png";

const cloud3inv = document.createElement("img");
cloud3inv.src = "../../../assets/img/cloud3inv.png";

const cloud5inv = document.createElement("img");
cloud5inv.src = "../../../assets/img/cloud5inv.png";

const cloud7inv = document.createElement("img");
cloud7inv.src = "../../../assets/img/cloud7inv.png";

const cloud8inv = document.createElement("img");
cloud8inv.src = "../../../assets/img/cloud8inv.png";

const cloud9inv = document.createElement("img");
cloud9inv.src = "../../../assets/img/cloud4_littleInv.png";

export function cloudsAdd(ctx, lvl, theme) {
    const lvlBackImgNumber = lvl;
    switch (lvlBackImgNumber) {
        case 1:
        case 7:
            if(theme===0){
                ctx.drawImage(cloud2, 600, 150);
                ctx.drawImage(cloud7, 400, 50);
                break;
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud2chB, 600, 150);
                ctx.drawImage(cloud7chB, 400, 50);
                break;
            } else if(theme===2){
                ctx.drawImage(cloud2inv, 600, 150);
                ctx.drawImage(cloud7inv, 400, 50);
                break;
            }
            break;
        case 6:
        case 2:
            if(theme===0){
                ctx.drawImage(cloud9, 500, 40);
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud9chB, 500, 40);
            } else if(theme===2){
                ctx.drawImage(cloud9inv, 500, 40);
            }
            break;
        case 3:
            if(theme===0){
                ctx.drawImage(cloud2, 600, 150);
                ctx.drawImage(cloud8, 400, 50);
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud2chB, 600, 150);
                ctx.drawImage(cloud8chB, 400, 50);
            } else if(theme===2){
                ctx.drawImage(cloud2inv, 600, 150);
                ctx.drawImage(cloud8inv, 400, 50);
            }
            break;
        case 4:
        case 8:
            if(theme===0){
                ctx.drawImage(cloud5, 600, 70);
                ctx.drawImage(cloud7, 400, 30);
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud5chB, 600, 70);
                ctx.drawImage(cloud7chB, 400, 30);
            } else if(theme===2){
                ctx.drawImage(cloud5inv, 600, 70);
                ctx.drawImage(cloud7inv, 400, 30);
            }
            break;
        case 5:
            if(theme===0){
                ctx.drawImage(cloud1, 500, 70);
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud1chB, 500, 70);
            } else if(theme===2){
                ctx.drawImage(cloud1inv, 500, 70);
            }
            break;
        case 9:
            if(theme===0){
                ctx.drawImage(cloud3, 650, 40);
            }else if(theme===1 || theme===3){
                ctx.drawImage(cloud3chB, 650, 40);
            } else if(theme===2){
                ctx.drawImage(cloud3inv, 650, 40);
            }
            break;
        default:
            break;
    }
}
