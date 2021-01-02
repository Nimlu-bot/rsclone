import { loginTemplate } from "./login.template";

export class Login {
    constructor() {
        this.language = "EN";
    }

    init() {
        const main = document.querySelector(".main");

        main.innerHTML = "";
        main.insertAdjacentHTML("afterbegin", loginTemplate(this.language));
    }
}
