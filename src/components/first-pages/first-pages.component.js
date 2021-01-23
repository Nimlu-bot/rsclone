import { backBtnHeader, continueBtn } from "./psges-list/backBtnHeader/backBtnHeader.template";

import { settingsPagesTemplate } from "./psges-list/settings/settings-pages.template";
import { navPagesTemplate } from "./psges-list/nav/nav-pages.template";
import { levelPagesTemplate } from "./psges-list/level/level-pages.template";
import { firstPagesTemplate } from "./first-pages.template";
import { scoreTemplate } from "./psges-list/score/score.template";

import {CondratsBro} from "./psges-list/congratsBro/congrats.component";// поздравление ----------Tonya тебе

// Tonya
import { GameField } from "../game-field/game-field.component";
// Sergey
import { Login } from "../login/login.component";
import { Statistics } from "./psges-list/statistic/statistic-page.component";
// Andrey
import AudioProcessor from "../audio-processor/audio-processor.component";

export class FirstPages {
    constructor() {
        this.title = "Game menu";
        this.gameField = new GameField();
        this.login = new Login();
        this.congrats = new CondratsBro();//-----------------------------------------------Tonya тебе
    }

    score() {
        document.querySelector(".game-field-main").insertAdjacentHTML("afterbegin", scoreTemplate);
        setTimeout(() => {
            document.querySelector(".bullet-box").style.left = "0%";
            document.querySelector(".point-box").style.left = "0%";
            document.querySelector(".total-box").style.left = "0%";
        }, 0);
    }

    loginForm() {
        document.querySelector(".user").addEventListener("click", () => {
            if (!document.querySelector(".game-field-main")) {
                if (!document.querySelector(".login-div")) {
                    const divElem = document.createElement("div");
                    divElem.classList.add("login-div");
                    setTimeout(() => {
                        divElem.style.right = "5px";
                    }, 100);
                    document.querySelector(".wrapper").append(divElem);
                    this.login.init();
                } else {
                    setTimeout(() => {
                        document.querySelector(".login-div").remove();
                    }, 100);
                    document.querySelector(".login-div").style.right = "-100%";
                }
            } else {
                return false;
            }
        });
    }

    continue() {
        document.querySelector(".continue-btn").addEventListener("click", () => {
            document.querySelector(".nav").remove();
            document.querySelector(".game-menu").style.zIndex = "10";
            document.querySelector(".game-menu").style.backgroundColor = "transparent";
            this.pauseBtn();
        });
    }

    nav() {
        this.title = "Game menu";
        document.querySelector(".game-menu").style.zIndex = "25";
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", navPagesTemplate);

        setTimeout(()=>{
            document.querySelector(".nav").style.top = "0%";
        },0)

        // eslint-disable-next-line consistent-return
        document.querySelector(".nav").addEventListener("click", (e) => {
            if (document.querySelector(".login-wrapper")) {
                document.querySelector(".login-wrapper").remove();
            }

            // eslint-disable-next-line prefer-const
            switch (e.target.id) {
                case "start":
                    document.querySelector(".nav").remove();
                    document.querySelector(".game-menu").style.zIndex = "10";
                    // default start level 1
                    return this.start(1);

                case "level":
                    document.querySelector(".nav").remove();
                    return this.level();

                case "settings":
                    document.querySelector(".nav").remove();
                    return this.settings();

                case "statistic":
                    document.querySelector(".nav").remove();
                    return this.statistic();

                default:
                    break;
            }
        });
        if (document.querySelector(".game-field-main")) {
            document.querySelector(".nav").insertAdjacentHTML("afterbegin", continueBtn);
            this.continue();
        }
    }

    pauseBtn() {
        document.querySelector(".user").insertAdjacentHTML("afterend", backBtnHeader);
        document.querySelector(".pause-btn-header").addEventListener("click", () => {
            document.querySelector(".game-menu").style.zIndex = "25";
            document.querySelector(".pause-btn-header").remove();
            this.nav();
        });
    }

    start(lvl) {
        document.querySelector(".game-place").innerHTML = "";
        document.querySelector(".game-menu").style.zIndex = "10";
        document.querySelector(".game-menu").style.backgroundColor = "transparent";
        this.title = "game";
        document.querySelector(".pages").innerHTML = this.title;
        this.pauseBtn();
        this.gameField.init(lvl);
        this.score();
    }

    level() {
        this.title = "level";
        
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", levelPagesTemplate);
        setTimeout(()=>{
            document.querySelector(".level-wrap").style.bottom = "0%";
        },0)
        
        // eslint-disable-next-line consistent-return
        document.querySelector(".level-wrap").addEventListener("click", (e) => {
            if (e.target.id === "level-back") {
                document.querySelector(".level-wrap").remove();
                return this.nav();
                // eslint-disable-next-line no-else-return
            } else {
                document.querySelector(".level-wrap").remove();
                this.start(e.target.value);
            }
        });
    }

    settings() {
        this.title = "settings";
        document.querySelector(".pages").innerHTML = this.title;
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", settingsPagesTemplate);
        setTimeout(()=>{
            document.querySelector(".settings-wrap").style.left = "0%";
        },0)
        // eslint-disable-next-line consistent-return
        document.querySelector(".settings-wrap").addEventListener("click", (e) => {
            if (e.target.id === "settings-back") {
                document.querySelector(".settings-wrap").remove();
                return this.nav();
            }
            if (e.target.closest(".lang-container")) {
                const langs = document.querySelector(".lang-container");
                const selected = langs.querySelectorAll(".selected");

                [...selected].forEach((el) => el.classList.remove("selected"));
                e.target.classList.add("selected");
                localStorage.setItem("currentLang", JSON.stringify(e.target.innerText));
            }
        });

        this.volumeChanger();
        this.panChanger();
    }

    statistic() {
        this.title = "statistic";
        document.querySelector(".pages").innerHTML = this.title;
        // document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        const stat = new Statistics();
        stat.init();
        setTimeout(()=>{
            document.querySelector(".statistic-wrap").style.right = "0%";
        },0)
        // eslint-disable-next-line consistent-return
        document.querySelector(".statistic-wrap").addEventListener("click", (e) => {
            if (e.target.id === "statistic-back") {
                document.querySelector(".statistic-wrap").remove();
                return this.nav();
            }
        });
    }

    volumeChanger() {
        // volume changer
        const volumeChanger = document.querySelector("#volume");
        volumeChanger.value = AudioProcessor.gain;
        volumeChanger.addEventListener(
            "input",
            (event) => {
                AudioProcessor.setVolume(event.target.value);
            },
            false
        );
    }

    panChanger() {
        // panner (left/right speacker)
        const panChanger = document.querySelector("#panner");
        panChanger.value = AudioProcessor.pan;
        panChanger.addEventListener(
            "input",
            (event) => {
                AudioProcessor.setPan(event.target.value);
            },
            false
        );
    }

    init() {
        document.body.insertAdjacentHTML("afterbegin", firstPagesTemplate);
        
        this.nav();
        this.loginForm();

        this.congrats.init("Поздравляем ",1200);// congration--------------------------------Tonya тебе
    }
}
