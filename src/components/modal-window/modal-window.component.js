import { modalWindowTemplate } from "./modal-window.template";
import AudioProcessor from "../audio-processor/audio-processor.component";

export class ModalWindow {
  constructor(name) {
    this.windowName = name;
  }

  showWindow() {
    document.body.insertAdjacentHTML("afterBegin", modalWindowTemplate(this.windowName));

    if (this.windowName === 'game-over') {
      AudioProcessor.play('gameOver');
    }

    if (this.windowName === 'perfect') {
      AudioProcessor.play('perfect');
    }

    const coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);

    document.querySelector('#to-main').addEventListener('click', () => {
      document.querySelector('#modal-window').remove();
      document.querySelector('#cover-div').remove();
      AudioProcessor.pause('gameOver');
      AudioProcessor.reset('gameOver');
      AudioProcessor.pause('dogLaughs');
      AudioProcessor.reset('dogLaughs');
      AudioProcessor.pause('perfect');
      AudioProcessor.reset('perfect');
    });
  }
}

/*
import { ModalWindow } from "./components/index";
new ModalWindow('perfect').showWindow();    param: 'game-over' or 'perfect'
*/
