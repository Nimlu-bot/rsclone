import { backBtnHeader,continueBtn } from "./psges-list/backBtnHeader/backBtnHeader.template";
import { statisticPagesTemplate } from "./psges-list/statistic/statistic-pages.template";
import { settingsPagesTemplate } from "./psges-list/settings/settings-pages.template";
import { navPagesTemplate } from "./psges-list/nav/nav-pages.template";
import { levelPagesTemplate } from "./psges-list/level/level-pages.template";
import { firstPagesTemplate } from "./first-pages.template";
import {GameField} from "../game-field/game-field.component"

export class FirstPages {
    constructor() {
        this.title = "Game menu";
    }

    nav(){
        this.title = "Game menu"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", navPagesTemplate);
        // document.querySelector(".main").style.backgroundImage='url(../../assets/img/10.png)';
        // eslint-disable-next-line consistent-return
        document.querySelector(".nav").addEventListener('click', (e) => {
            // eslint-disable-next-line prefer-const
            switch (e.target.id) {
                case 'start': 
                    document.querySelector(".nav").remove()
                    return this.start()
              
                case 'level': 
                    document.querySelector(".nav").remove()
                    return this.level()
        
                case 'settings': 
                    document.querySelector(".nav").remove()
                    return this.settings()
       
                case 'statistic': 
                    document.querySelector(".nav").remove()
                    return this.statistic()
            
                default:

                break
            }
        })
    }

    pause() {
        this.nav()
        document.querySelector(".nav").insertAdjacentHTML('afterbegin', continueBtn)
        document.querySelector(".continue-btn").addEventListener("click",() => {
            document.querySelector(".nav").remove();
            this.pauseBtn()
        })
    }

    pauseBtn(){
        document.querySelector(".pause-btn").insertAdjacentHTML("afterbegin", backBtnHeader);
        document.querySelector(".pause-btn-header").addEventListener("click",()=>{
            document.querySelector(".pause-btn-header").remove();
            this.pause();
        })
    }

    start() {
        this.title = "play"
        document.querySelector(".pages").innerHTML = this.title;
        this.pauseBtn()
        const gameField = new GameField();
        gameField.init()
    }

    level() {
        this.title = "level"
        document.querySelector(".pages").innerHTML = this.title
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", levelPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".level").addEventListener('click', (e) => {
            if(e.target.id === 'level-back'){
                document.querySelector(".level").remove();
                return this.nav()
            }
        })
    }

    settings(){
        this.title = "settings"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", settingsPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".settings").addEventListener('click', (e) => {
            if(e.target.id === 'settings-back'){
                document.querySelector(".settings").remove();
                return this.nav()
            }
        })
    }

    statistic(){
        this.title = "statistic"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".statistic").addEventListener('click', (e) => {
            if(e.target.id === 'statistic-back'){
                document.querySelector(".statistic").remove();
                return this.nav()
            }
        })
        
    }

    init() {
        document.body.insertAdjacentHTML("afterbegin", firstPagesTemplate);
        this.nav();
    }
}