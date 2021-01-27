import { modalWindowTemplate } from "./modal-window.template";
import { getLang } from "../../core/index";
import AudioProcessor from "../audio-processor/audio-processor.component";

export class ModalWindow {
  constructor(name) {
    this.windowName = name;
  }

  createWindow() {
    document.body.insertAdjacentHTML("afterBegin", modalWindowTemplate(this.windowName, getLang()));

    const coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.append(coverDiv);

    document.querySelector('#to-main').addEventListener('click', () => {
      document.body.style.overflowY = '';
      document.querySelector('.modal-game-over-hidden').style.display = 'none';
      document.querySelector('.modal-perfect-hidden').style.display = 'none';
      document.querySelector('#cover-div').style.display = 'none';
      AudioProcessor.pause('gameOver');
      AudioProcessor.reset('gameOver');
      AudioProcessor.pause('dogLaughs');
      AudioProcessor.reset('dogLaughs');
      AudioProcessor.pause('perfect');
      AudioProcessor.reset('perfect');
    });
  }

  showWindow() {
    document.body.style.overflowY = 'hidden';
    if (this.windowName === 'game-over') {
      document.querySelector('.modal-game-over-hidden').style.display = 'block';
      document.querySelector('#cover-div').style.display = 'block';
      AudioProcessor.play('gameOver');
    }

    if (this.windowName === 'perfect') {
      document.querySelector('.modal-perfect-hidden').style.display = 'block';
      document.querySelector('#cover-div').style.display = 'block';
      AudioProcessor.play('perfect');
    }

  }
}

/*
import { ModalWindow } from "./components/index";
new ModalWindow('perfect').showWindow();    param: 'game-over' or 'perfect'
*/
