import { headerTemplate } from "./header.template";

export class Header {
    constructor() {
        this.title = "Levels";
    }

    init() {
        const wrapper = document.querySelector(".wrapper");

        wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.title));
    }
}
