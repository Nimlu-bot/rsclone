// import { Body } from "node-fetch";
import { loginTemplate } from "./login.template";
import { validateEmail, lang, getLang } from "../../core/index";
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
        document.querySelector(".login").addEventListener("click", this.loginEventHandler.bind(this)); // этот прослушиватель нельзя удалить
        document.querySelector(".signup").addEventListener("click", this.signUpEventHandler.bind(this)); // этот тоже
        document.querySelector(".login-without").addEventListener("click", this.withoutEventHandler);
    }

    async loginEventHandler() {
        console.log("login");
        const email = document.querySelector(".login-email");
        const password = document.querySelector(".login-password");
        const isEmail = validateEmail(email.value);
        const loginEvent = new CustomEvent("login", {
            detail: { data: undefined },
            bubbles: true,
            cancelable: true
        });

        if (isEmail) {
            const user = {
                email: email.value,
                password: password.value
            };
            try {
                const response = await axios.post(`${apiUrl}/api/auth/login`, user);
                // const data = await response.json();
                console.log(response);
                if (response.statusText !== "OK") {
                    throw new Error(response) || lang[getLang()].SomethingWentWrongTryAgain;
                } else {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("id", response.data.userId);
                    localStorage.setItem("email", user.email);

                    loginEvent.detail.data = true;
                    document.dispatchEvent(loginEvent);
                }
            } catch (e) {
                const message = document.querySelector(".login-message");
                message.innerText = "";
                message.style.color = "brown";
                // console.log(e.response.data.message);
                if (e.response) {
                    message.innerText = lang[getLang()][e.response.data.message];
                } else if (e.request) {
                    message.innerText = lang[getLang()].serverError; // 'Server access error'
                } else {
                    message.innerText = lang[getLang()].unknowError; // 'Unknow Error'
                }
            }
        } else {
            const message = document.querySelector(".login-message");
            message.innerText = "";
            message.style.color = "brown";
            message.innerText = lang[getLang()].invalidEmail;
        }
    }

    async signUpEventHandler() {
        const email = document.querySelector(".login-email");
        const password = document.querySelector(".login-password");
        const isEmail = validateEmail(email.value);

        if (isEmail) {
            const user = {
                email: email.value,
                password: password.value
            };
            try {
                const response = await axios.post(`${apiUrl}/api/auth/register`, user);
                if (response.statusText !== "Created") {
                    console.log(response);
                    throw new Error(response) || lang[getLang()].SomethingWentWrongTryAgain;
                } else {
                    const message = document.querySelector(".login-message");
                    message.style.color = "green";
                    message.innerText = lang[getLang()][response.data.message];
                    console.log(response);

                    await this.loginEventHandler();

                    // loginEvent.detail.data = true;
                    // document.dispatchEvent(loginEvent);
                }
            } catch (e) {
                const message = document.querySelector(".login-message");
                message.innerText = "";
                message.style.color = "brown";
                if (e.response) {
                    message.innerText = lang[getLang()][e.response.data.message];
                } else if (e.request) {
                    message.innerText = lang[getLang()].serverError; // 'Server access error'
                } else {
                    message.innerText = lang[getLang()].unknowError; // 'Unknow Error'
                }
                console.log("registration error");
            }
        } else {
            const message = document.querySelector(".login-message");
            message.innerText = "";
            message.style.color = "brown";
            message.innerText = lang[getLang()].invalidEmail;
        }
    }

    withoutEventHandler() {
        const loginEvent = new CustomEvent("login", {
            detail: { data: undefined },
            bubbles: true,
            cancelable: true
        });

        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        loginEvent.detail.data = false;
        document.dispatchEvent(loginEvent);
    }
}
