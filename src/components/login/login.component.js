// import { Body } from "node-fetch";
import { loginTemplate } from "./login.template";
import { validateEmail, lang, getLang, getStatEventHandler } from "../../core/index";
import { API_BASE_URL_PROD, API_BASE_URL_DEV, CURRENT_API } from "../../core/constants";

const axios = require("axios");

const apiUrl = CURRENT_API === "dev" ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export class Login {
    constructor() {
        this.lang = getLang();
    }

    init() {
        const main = document.querySelector(".game-menu");

        // main.innerHTML = '';
        main.insertAdjacentHTML("afterbegin", loginTemplate(getLang()));
        const loginButton = document.querySelector(".login");
        const signUpButton = document.querySelector(".signup");
        loginButton.addEventListener("click", this.loginEventHandler.bind(this)); // этот прослушиватель нельзя удалить
        signUpButton.addEventListener("click", this.signUpEventHandler.bind(this)); // этот тоже
    }

    loginEventHandler() {
        const email = document.querySelector(".login-email");
        const password = document.querySelector(".login-password");
        const isEmail = validateEmail(email.value);

        if (isEmail) {
            const user = {
                email: email.value,
                password: password.value
            };
            const customEvent = new CustomEvent("login", {
                detail: { data: undefined },
                bubbles: true,
                cancelable: true
            });

            axios.post(`${apiUrl}/api/auth/login`, user).then(
                (response) => {
                    console.log(response);

                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("id", response.data.userId);
                    localStorage.setItem("email", user.email);

                    customEvent.detail.data = true;
                    document.dispatchEvent(customEvent);
                    //  getStatEventHandler();
                },
                (error) => {
                    customEvent.detail.data = false;
                    document.dispatchEvent(customEvent);
                    const message = document.querySelector(".login-message");
                    // message.innerText = "";
                    // message.style.color = "red";
                    if (error.response) {
                        // message.innerText = lang[getLang()][error.response.data.message];
                    } else if (error.request) {
                        // message.innerText = lang[getLang()].serverError; // 'Server access error'
                    } else {
                        // message.innerText = lang[getLang()].unknowError; // 'Unknow Error'
                    }
                }
            );
        } else {
            const message = document.querySelector(".login-message");
            // message.innerText = lang[getLang()].invalidEmail;
        }
    }

    signUpEventHandler() {
        const email = document.querySelector(".login-email");
        const password = document.querySelector(".login-password");
        const isEmail = validateEmail(email.value);

        if (isEmail) {
            const user = {
                email: email.value,
                password: password.value
            };

            axios.post(`${apiUrl}/api/auth/register`, user).then(
                (response) => {
                    const message = document.querySelector(".login-message");
                    // message.style.color = "green";
                    // message.innerText = lang[getLang()][response.data.message];
                    console.log(response);
                },
                (error) => {
                    const message = document.querySelector(".login-message");
                    // message.innerText = "";
                    //  message.style.color = "red";
                    if (error.response) {
                        // message.innerText = lang[getLang()][error.response.data.message];
                    } else if (error.request) {
                        //  message.innerText = lang[getLang()].serverError; // 'Server access error'
                    } else {
                        // message.innerText = lang[getLang()].unknowError; // 'Unknow Error'
                    }
                }
            );
        } else {
            const message = document.querySelector(".login-message");
            // message.innerText = lang[getLang()].invalidEmail;
        }
    }
}
