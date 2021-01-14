// export function newProgressParameters(){
//     progressForGame.ducksInCurrentLvl=0;
//     progressForGame.cruckDuck=0; // ушедшие любым способом утки
//     progressForGame.shotDucks=0; // застреленные утки
//     progressForGame.goAwayducks=0; // улетевшие утки
//     progressForGame.currentTwoDucksCruck=0; // ушла ли любым свособом текущая пара уток
//     progressForGame.currentTwoShotDucks=0;
//     progressForGame.bullet=4; // оставшиеся пули
// }

    // id="bullet"
    /* <img src="../../../assets/img/bullet.png"></img> */
    // id="point"
    // id="total"

    export function showCurrentStatistic(currentProgress){
        const bulletBox = document.getElementById('bullet');
        const ducsBox = document.getElementById('point');
        const score = document.getElementById('total');
        if(bulletBox){
            bulletBox.innerHTML='';
            for (let i=0; i<currentProgress.bullet; i+=1) {
                bulletBox.insertAdjacentHTML("beforeend", '<img src="../../../assets/img/bullet.png"></img>');
            }
        }
        if(ducsBox){
            ducsBox.innerHTML='';
            for (let i=0; i<currentProgress.shotDucks; i+=1) {
                ducsBox.insertAdjacentHTML("beforeend", '<img src="../../../assets/img/utka_popadanie.png"></img>');
            }
            for (let i=0; i<currentProgress.goAwayducks; i+=1) {
                ducsBox.insertAdjacentHTML("beforeend", '<img src="../../../assets/img/utka_kontur_little_little.png"></img>');
            }
        }
        if(score){
        score.innerHTML='';
        score.innerHTML=currentProgress.score;
        score.insertAdjacentHTML("beforeend", `<p>lvl ${currentProgress.level}</p>`);
        }

    
}