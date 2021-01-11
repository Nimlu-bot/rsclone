import { backBtnHeader,continueBtn } from "./psges-list/backBtnHeader/backBtnHeader.template";
import { statisticPagesTemplate } from "./psges-list/statistic/statistic-pages.template";
import { settingsPagesTemplate } from "./psges-list/settings/settings-pages.template";
import { navPagesTemplate } from "./psges-list/nav/nav-pages.template";
import { levelPagesTemplate } from "./psges-list/level/level-pages.template";
import { firstPagesTemplate } from "./first-pages.template";
import { scoreTemplate } from "./psges-list/score/score.template";
// Tonya
import {GameField} from "../game-field/game-field.component"
// Sergey
import { Login } from '../login/login.component';

export class FirstPages {
    constructor() {
        this.title = "Game menu";
    }

    score(){
        document.querySelector(".game-field-main").insertAdjacentHTML("afterbegin", scoreTemplate);
        setTimeout(()=>{
            document.querySelector(".bullet-box").style.left = "0%"
            document.querySelector(".point-box").style.left = "0%"
            document.querySelector(".total-box").style.left = "0%"
        },0)
    }

    nav(){
        this.title = "Game menu"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", navPagesTemplate);
        // document.querySelector(".main").style.backgroundImage='url(../../assets/img/10.png)';
        // eslint-disable-next-line consistent-return
        document.querySelector(".nav").addEventListener('click', (e) => {

            if(!(document.querySelector(".login-wrapper")) === false ) {
                document.querySelector(".login-wrapper").remove()
            }
                
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

    continue() {
        this.nav()
        document.querySelector(".game-menu").style.backgroundColor = "rgba(50, 150, 141, 0.9)";
        document.querySelector(".nav").insertAdjacentHTML('afterbegin', continueBtn)
        document.querySelector(".continue-btn").addEventListener("click",() => {
            document.querySelector(".nav").remove();
            document.querySelector(".game-menu").style.backgroundColor = "transparent";
            this.pauseBtn()
        })
    }

    pauseBtn(){
        document.querySelector(".pause-btn").insertAdjacentHTML("afterbegin", backBtnHeader);
        document.querySelector(".pause-btn-header").addEventListener("click",()=>{
            document.querySelector(".pause-btn-header").remove();
            this.continue();
        })
    }

    start() {
        document.querySelector(".game-place").innerHTML = "";
        document.querySelector(".game-menu").style.backgroundColor = "transparent";
        this.title = "play"
        document.querySelector(".pages").innerHTML = this.title;
        this.pauseBtn()
        const gameField = new GameField();
        gameField.init()
        this.score()
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
            // eslint-disable-next-line no-else-return
            } else {
                document.querySelector(".level").remove()
                this.start()
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
        const login = new Login();
        login.init();
        this.nav();
    }
}