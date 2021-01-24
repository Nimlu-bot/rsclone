import {congrats} from "./congrats.template";


export class CondratsBro {
    constructor() {
        this.title = "Condrats";
    }

    init( win ,rest){
        document.body.insertAdjacentHTML("afterbegin", congrats(win,rest));
        document.querySelector(".wrap-congrats").addEventListener("click", () => {document.querySelector(".wrap-congrats").remove()})
    }
}