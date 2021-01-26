import {congrats} from "./congrats.template";

import AudioProcessor from "../../../audio-processor/audio-processor.component";


export class CondratsBro {
    constructor() {
        this.title = "Condrats";
    }

    init( win ,rest){
        AudioProcessor.reset('gameOver');
        setTimeout(()=>{
            AudioProcessor.play('gameOver');
        },1000)
            
        document.body.insertAdjacentHTML("afterbegin", congrats(win,rest));
        document.querySelector(".wrap-congrats").addEventListener("click", () => {
            AudioProcessor.pause('gameOver');
            document.querySelector(".wrap-congrats").remove();
        })
    }
}