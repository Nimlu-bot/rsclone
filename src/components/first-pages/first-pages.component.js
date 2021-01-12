import { backBtnHeader, continueBtn } from "./psges-list/backBtnHeader/backBtnHeader.template";
import { statisticPagesTemplate } from "./psges-list/statistic/statistic-pages.template";
import { settingsPagesTemplate } from "./psges-list/settings/settings-pages.template";
import { navPagesTemplate } from "./psges-list/nav/nav-pages.template";
import { levelPagesTemplate } from "./psges-list/level/level-pages.template";
import { firstPagesTemplate } from "./first-pages.template";
import { scoreTemplate } from "./psges-list/score/score.template";
// Tonya
import { GameField } from "../game-field/game-field.component"
// Sergey
import { Login } from '../login/login.component';
// Andrey
import AudioProcessor from "../audio-processor/audio-processor.component";


export class FirstPages {
    constructor() {
        this.title = "Game menu";
        this.gameField = new GameField();
        this.login = new Login();
    }
    
    score(){
        document.querySelector(".game-field-main").insertAdjacentHTML("afterbegin", scoreTemplate);
        setTimeout(()=>{
            document.querySelector(".bullet-box").style.left = "0%"
            document.querySelector(".point-box").style.left = "0%"
            document.querySelector(".total-box").style.left = "0%"
        },0)
    }

    loginForm(){
        document.querySelector(".user").addEventListener("click", () => {
            if(!document.querySelector(".game-field-main")){
                if(!document.querySelector(".login-wrapper")){
                    this.login.init();
                } else {
                    document.querySelector(".login-wrapper").remove();
                }
            } else {
                return false
            } 
        })
    }

    continue() {
        document.querySelector(".continue-btn").addEventListener("click",() => {
            document.querySelector(".nav").remove();
            document.querySelector(".game-menu").style.backgroundColor = "transparent";
            this.pauseBtn()
        })
    }

    nav(){
        this.title = "Game menu"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", navPagesTemplate);

        // eslint-disable-next-line consistent-return
        document.querySelector(".nav").addEventListener('click', (e) => {

            if (document.querySelector(".login-wrapper")) {
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
        if(document.querySelector(".game-field-main")){
            document.querySelector(".nav").insertAdjacentHTML('afterbegin', continueBtn)
            this.continue()
        }
    }

    pauseBtn(){
        document.querySelector(".user").insertAdjacentHTML("afterend", backBtnHeader);
        document.querySelector(".pause-btn-header").addEventListener("click",()=>{
            document.querySelector(".pause-btn-header").remove();
            this.nav();
        })
    }

    start() {
        document.querySelector(".game-place").innerHTML = "";
        document.querySelector(".game-menu").style.backgroundColor = "transparent";
        this.title = "play"
        document.querySelector(".pages").innerHTML = this.title;
        this.pauseBtn()
        this.gameField.init()
        this.score()
    }

    level() {
        this.title = "level"
        document.querySelector(".pages").innerHTML = this.title
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", levelPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".level").addEventListener('click', (e) => {
            if (e.target.id === 'level-back') {
                document.querySelector(".level").remove();
                return this.nav()
                // eslint-disable-next-line no-else-return
            } else {
                document.querySelector(".level").remove()
                this.start()
            }
        })
    }

    settings() {
        this.title = "settings"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", settingsPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".settings").addEventListener('click', (e) => {
            if (e.target.id === 'settings-back') {
                document.querySelector(".settings").remove();
                return this.nav()
            }
        });

        this.volumeChanger();
        this.panChanger();

    }

    statistic() {
        this.title = "statistic"
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        // eslint-disable-next-line consistent-return
        document.querySelector(".statistic").addEventListener('click', (e) => {
            if (e.target.id === 'statistic-back') {
                document.querySelector(".statistic").remove();
                return this.nav()
            }
        })

    }

    volumeChanger() {
        // volume changer
        const volumeChanger = document.querySelector('#volume');
        volumeChanger.value = AudioProcessor.gain;
        volumeChanger.addEventListener('input', (event) => {
            AudioProcessor.setVolume(event.target.value);
        }, false);
    }

    panChanger() {
        // panner (left/right speacker)
        const panChanger = document.querySelector('#panner');
        panChanger.value = AudioProcessor.pan;
        panChanger.addEventListener('input', (event) => {
            AudioProcessor.setPan(event.target.value);
        }, false);
    }

    init() {
        
        document.body.insertAdjacentHTML("afterbegin", firstPagesTemplate);
        document.querySelector('.wrapper').style.backgroundImage = "url(../../assets/img/paper-cell.jpg)"
        this.nav();
        this.loginForm();
    }
}