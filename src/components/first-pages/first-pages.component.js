/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { backBtnHeader, continueBtn } from "./psges-list/backBtnHeader/backBtnHeader.template";

import { settingsPagesTemplate } from "./psges-list/settings/settings-pages.template";
import { navPagesTemplate } from "./psges-list/nav/nav-pages.template";
import { levelPagesTemplate } from "./psges-list/level/level-pages.template";
import { firstPagesTemplate } from "./first-pages.template";
import { scoreTemplate } from "./psges-list/score/score.template";
// Tonya
import { GameField } from "../game-field/game-field.component";
// Sergey
import { Login } from "../login/login.component";
import { Statistics } from "./psges-list/statistic/statistic-page.component";
import { setLang } from "../../core/config";
import { getScoreEventHandler, getStatEventHandler } from "../../core/utils/serverAPI";
import { lang, getLang } from "../../core/index";
// Andrey
import AudioProcessor from "../audio-processor/audio-processor.component";

export class FirstPages {
    constructor() {
        this.title = "Game menu";
        this.gameField = new GameField();
        this.login = new Login();
    }

    score() {
        document.querySelector(".game-field-main").insertAdjacentHTML("afterbegin", scoreTemplate(lang));
        setTimeout(() => {
            document.querySelector(".bullet-box").style.left = "0%";
            document.querySelector(".point-box").style.left = "0%";
            document.querySelector(".total-box").style.left = "0%";
        }, 0);
    }

    loginForm() {
        // eslint-disable-next-line consistent-return
        document.querySelector(".user").addEventListener("click", () => {
            if (!document.querySelector(".game-field-main")) {
                if (!document.querySelector(".login-div")) {
                    const divElem = document.createElement("div");
                    divElem.classList.add("login-div");
                    setTimeout(() => {
                        divElem.style.right = "5px";
                    }, 100);
                    document.querySelector(".game-menu").append(divElem);
                    this.login.init();
                    if(localStorage.getItem('theme') === '3'){
                        document.querySelector(".login-wrapper").style.backgroundImage = "none";
                        document.querySelector(".login-wrapper").style.backgroundColor = "rgb(28, 28, 28)";
                        document.querySelectorAll(".login-button").forEach(elem => elem.style.color = "#fff");
                    } else if (localStorage.getItem('theme') === '1'){
                        document.querySelector(".login-wrapper").style.backgroundImage = "none";
                        document.querySelector(".login-wrapper").style.backgroundColor = "#FAF0E6";
                    } else {
                        document.querySelector(".login-wrapper").setAttribute("style","none");
                    }

                    document.querySelectorAll(".login-button").forEach((elem) => {
                        elem.addEventListener("click", () => {
                            setTimeout(() => {
                                document.querySelector(".login-div").remove();
                            }, 100);
                            document.querySelector(".login-div").style.right = "-100%";
                        });
                    });
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
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin",
                navPagesTemplate(lang
                    // ,
                    // ,
                    // ,
                    // 
                )
            );
    

        setTimeout(() => {
            document.querySelector(".nav").style.top = "0%";
            if(localStorage.getItem('theme') === '1'){
                document.querySelector(".nav").style.backgroundImage = "none";
                document.querySelector(".nav").style.backgroundColor = "#FAF0E6";
            } else if (localStorage.getItem('theme') === '3'){
                document.querySelector(".nav").style.backgroundImage = "none";
                document.querySelector(".nav").style.backgroundColor = "rgb(28, 28, 28)";
                document.querySelector(".nav").style.color = "#fff"

            } else {
                document.querySelector(".nav").style.backgroundImage = "../../assets/img/paper-cell.jpg";
            }
        }, 0);

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
            document.querySelector(".nav").insertAdjacentHTML("afterbegin", continueBtn(lang[getLang()].continue));
            this.continue();
        }
    }

    pauseBtn() {
        document.querySelector(".user").insertAdjacentHTML("afterend", backBtnHeader(lang[getLang()].pause));
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
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", levelPagesTemplate(lang));
        setTimeout(() => {
            document.querySelector(".level-wrap").style.bottom = "0%";
            if(localStorage.getItem('theme') === '1'){
                document.querySelector(".level-wrap").style.backgroundImage = "none";
                document.querySelector(".level-wrap").style.backgroundColor = "#FAF0E6";
            } else if (localStorage.getItem('theme') === '3'){
                document.querySelector(".level-wrap").style.backgroundImage = "none";
                document.querySelector(".level-wrap").style.backgroundColor = "rgb(28, 28, 28)";
                document.querySelector(".level-wrap").style.color = "#fff";

            } else {
                document.querySelector(".level-wrap").style.backgroundImage = "../../assets/img/paper-cell.jpg";
            }
        }, 0);

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
        document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", settingsPagesTemplate(lang));

        setTimeout(() => {
            document.querySelector(".settings-wrap").style.left = "0%";
            if(localStorage.getItem('theme') === '1'){
                document.querySelector(".settings-wrap").style.backgroundColor = "#FAF0E6";
                document.querySelector(".settings-wrap").style.backgroundImage = "none";
                document.querySelector(".settings-wrap").style.color = "#2e0d67";
                document.querySelector(".settings-wrap").style.filter = "grayscale(100%)";
            } else if (localStorage.getItem('theme') === '3'){
                document.querySelector(".settings-wrap").style.backgroundImage = "none";
                document.querySelector(".settings-wrap").style.color = "#fff";
                document.querySelector(".settings-wrap").style.backgroundColor = "#1C1C1C";
            } else {
                document.querySelector(".settings-wrap").style.backgroundImage = "../../assets/img/paper-cell.jpg";
            }
            
        }, 0);
        const currentLang = JSON.parse(localStorage.getItem("currentLang")) || "EN";
        const langs = document.querySelectorAll(".settings-lang");
        // const selected = langs.querySelectorAll(".selected");
        [...langs].forEach((el) => {
            if (el.innerText === currentLang) {
                el.classList.add("selected");
                setLang(currentLang);
            }
        });

        // eslint-disable-next-line consistent-return
        document.querySelector(".settings-wrap").addEventListener("click", (e) => {
            if (e.target.id === "settings-back") {
                document.querySelector(".settings-wrap").remove();
                return this.nav();
            }
            if (e.target.closest(".lang-container")) {
                const langContainer = document.querySelector(".lang-container");
                const selected = langContainer.querySelectorAll(".selected");

                [...selected].forEach((el) => el.classList.remove("selected"));
                e.target.classList.add("selected");
                localStorage.setItem("currentLang", JSON.stringify(e.target.innerText));
                setLang(e.target.innerText);
            }
        });

        this.volumeChanger();
        this.panChanger();
        this.theme();
    }

    statistic() {
        this.title = "statistic";
        document.querySelector(".pages").innerHTML = this.title;

        // document.querySelector(".game-menu").insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        const stat = new Statistics();
        getScoreEventHandler();
        getStatEventHandler();
        stat.init();
        setTimeout(() => {
            document.querySelector(".statistic-wrap").style.right = "0%";

            if(localStorage.getItem('theme') === '1'){
                document.querySelector(".statistic-wrap").style.backgroundImage = "none";
                document.querySelector(".statistic-wrap").style.backgroundColor = "#FAF0E6";
            } else if (localStorage.getItem('theme') === '3'){
                document.querySelector(".statistic-wrap").style.backgroundImage = "none";
                document.querySelector(".statistic-wrap").style.backgroundColor = "rgb(28, 28, 28)";
                document.querySelector(".statistic-wrap").style.color = "#fff";

            } else {
                return document.querySelector(".statistic-wrap").style.backgroundImage = "../../assets/img/paper-cell.jpg";
            }
        }, 0);
        // eslint-disable-next-line consistent-return
        document.querySelector(".statistic-wrap").addEventListener("click", (e) => {
            if (e.target.id === "statistic-back") {
                document.querySelector(".statistic-wrap").remove();
                return this.nav();
            }
        });
    }

    style0(){
        document.querySelector(".wrapper").setAttribute("style","none");
        document.body.style.backgroundImage = "url(../../assets/img/pngwing.com1.png)"
        document.querySelector(".game-place").style.filter = "none";
        document.querySelector(".game-menu").style.filter = "none"  
        document.querySelector(".logo-box").style.backgroundColor = "transparent";
        document.querySelector(".year").style.color = "#2e0d67";
        document.querySelector(".user-img").src="../../assets/img/troll.png"
        document.querySelector(".header").style.color = "#2e0d67";
        document.querySelectorAll(".autor-Name").forEach((elem) => {
            elem.style.color = "#2e0d67";
        })

        if( !document.querySelector(".settings-wrap") ){
            return false
        } else {
            document.querySelector(".settings-wrap").style.filter = "none";
            document.querySelector(".settings-wrap").style.backgroundColor = "transparent";
            document.querySelector(".settings-wrap").style.backgroundImage = "../../assets/img/paper-cell.jpg";
            document.querySelector(".settings-wrap").style.color = "#2e0d67";
        }
        
    }

    style1(){
        document.querySelector(".wrapper").setAttribute("style","none");
        document.querySelector(".wrapper").style.backgroundColor = "#FAF0E6";
        document.querySelector(".wrapper").style.backgroundImage = "none";
        document.querySelector(".wrapper").style.filter = "grayscale(100%)";
        document.body.style.backgroundImage = "url(../../assets/img/pngwing.com1.png)"

        if(!document.querySelector(".settings-wrap")){
            return false
        } else {
            document.querySelector(".settings-wrap").style.backgroundColor = "#FAF0E6";
            document.querySelector(".settings-wrap").style.backgroundImage = "none";
            document.querySelector(".settings-wrap").style.color = "#2e0d67";
            document.querySelector(".settings-wrap").style.filter = "grayscale(100%)";  
        }            
    
        document.querySelector(".game-place").style.filter = "none";
        document.querySelector(".game-menu").style.filter = "none"

        document.querySelector(".logo-box").style.backgroundColor = "transparent";
        document.querySelector(".year").style.color = "#2e0d67";
        document.querySelector(".user-img").src="../../assets/img/troll.png"
        document.querySelector(".header").style.color = "#2e0d67";
        document.querySelectorAll(".autor-Name").forEach((elem) => elem.style.color = "#2e0d67")
    }

    style2(){
        document.querySelector(".wrapper").setAttribute("style","none");
        document.querySelector(".wrapper").style.backgroundImage = "../../assets/img/paper-cell.jpg";
        document.querySelector(".wrapper").style.filter = "invert(100%)";
        document.body.style.backgroundImage = "url(../../assets/img/pngwing.com1.png)" 

        document.querySelector(".game-place").style.filter = "none";
        document.querySelector(".game-menu").style.filter = "none";

        document.querySelector(".logo-box").style.backgroundColor = "transparent";
        document.querySelector(".year").style.color = "#2e0d67";
        document.querySelector(".user-img").src="../../assets/img/troll.png";
        document.querySelector(".header").style.color = "#2e0d67";
        document.querySelectorAll(".autor-Name").forEach((elem) => elem.style.color = "#2e0d67");

        if(!document.querySelector(".settings-wrap")){
            return false;
        } else {
            document.querySelector(".settings-wrap").style.filter = "none";  
            document.querySelector(".settings-wrap").style.color = "rgb(46, 13, 103)";
            document.querySelector(".settings-wrap").style.backgroundColor = "transparent";
            document.querySelector(".settings-wrap").style.backgroundImage = "../../assets/img/paper-cell.jpg";
        }
    }

    style3(){
        document.querySelector(".wrapper").setAttribute("style","none");
        document.querySelector(".wrapper").style.backgroundColor = "#1C1C1C";
        document.querySelector(".wrapper").style.backgroundImage = "none";
        document.querySelector(".wrapper").style.filter = "saturate(10%)";   
        document.body.style.backgroundImage = "url(../../assets/img/mramor.png)"  
        
// rs logo
        document.querySelector(".logo-box").style.backgroundColor = "#fff";
// header & footer text 
        document.querySelector(".year").style.color = "#fff";
        document.querySelector(".header").style.color = "#fff";
        document.querySelectorAll(".autor-Name").forEach((elem) => elem.style.color = "#fff")
// troll face 
        document.querySelector(".user-img").src="../../assets/img/trollinv.png"

        if(!document.querySelector(".settings-wrap")){
            return false;
        } else {
            document.querySelector(".settings-wrap").style.filter = "none";
            document.querySelector(".settings-wrap").style.backgroundImage = "none";
            document.querySelector(".settings-wrap").style.color = "#fff";
            document.querySelector(".settings-wrap").style.backgroundColor = "#1C1C1C";
        }
    }

    styleForTheme(){
        if(localStorage.getItem('theme') === null){
            this.style0();
        } else if (`${localStorage.getItem('theme')}` === "0"){
            this.style0();
        } else if (`${localStorage.getItem('theme')}` === "1"){
            this.style1();
        } else if(`${localStorage.getItem('theme')}` === "2"){
            this.style2();
        } else if(`${localStorage.getItem('theme')}` === "3"){
            this.style3();
        }
    }

    theme(){

        if(localStorage.getItem('theme') === null){
            localStorage.setItem('theme',0)
            document.getElementsByName('input_theme').forEach(elem => {
                if(elem.value === "0"){
                    elem.setAttribute("checked", "true")
                }
                this.styleForTheme();
            })
        } else {
            document.getElementsByName('input_theme').forEach(elem => {
                if(elem.value === `${localStorage.getItem('theme')}`){
                    elem.setAttribute("checked", "true");
                    this.styleForTheme();
                }
            });
        }

        document.getElementsByName("input_theme").forEach((elem) => {
            elem.addEventListener("click", () => {
                localStorage.setItem('theme',elem.value)
                this.styleForTheme();
            })
        })

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
        document.body.insertAdjacentHTML("afterbegin", firstPagesTemplate(lang));
        this.nav();
        this.loginForm();
        this.styleForTheme();
    }
}
