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

  showWindow(dogTheme) {
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

    const dogsImagesOrigin = document.querySelectorAll('.dog-origin');
    const dogsImagesInvert = document.querySelectorAll('.dog-invert');
    const dogsImagesPencil = document.querySelectorAll('.dog-pencil');
    const modalBackground = document.querySelectorAll('#modal-window');
    const toMain = document.querySelectorAll('#to-main');
    const modalTittle = document.querySelectorAll('.modal-for-theme');
    if (dogTheme === 0) {
      dogsImagesOrigin.forEach((el) => {el.style.display = 'inline';});
      dogsImagesInvert.forEach((el) => {el.style.display = 'none';});
      dogsImagesPencil.forEach((el) => {el.style.display = 'none';});
      modalBackground.forEach((el) => {el.style.background = `url('../../assets/img/paper-cell.jpg')`})
      toMain.forEach((el) => {
        el.style.background = `url('../../assets/img/paper-cell.jpg')`;
        el.style.border = `2px solid rgba(101, 81, 132, 1)`;
        el.style.color = `rgba(46, 13, 103, 1)`;
      });
      modalTittle.forEach((el) => {el.style.color = `rgba(46, 13, 103, 1)`});
    } else if (dogTheme === 1) {
      dogsImagesOrigin.forEach((el) => {el.style.display = 'none';});
      dogsImagesInvert.forEach((el) => {el.style.display = 'none';});
      dogsImagesPencil.forEach((el) => {el.style.display = 'inline';});
      modalBackground.forEach((el) => {el.style.background = 'white'});
      toMain.forEach((el) => {
        el.style.background = 'white';
        el.style.border = `2px solid #555555`;
        el.style.color = '#555555';
      });
      modalTittle.forEach((el) => {el.style.color = '#555555'});
    } else if (dogTheme === 2) {
      dogsImagesOrigin.forEach((el) => {el.style.display = 'none';});
      dogsImagesInvert.forEach((el) => {el.style.display = 'inline';});
      dogsImagesPencil.forEach((el) => {el.style.display = 'none';});
      modalBackground.forEach((el) => {el.style.background = 'black';});
      toMain.forEach((el) => {
        el.style.background = 'black';
        el.style.border = `2px solid #b0b0b0`;
        el.style. color = '#b0b0b0';
      });
      modalTittle.forEach((el) => {el.style.color = '#b0b0b0';})
    } else if (dogTheme === 3) {
      dogsImagesOrigin.forEach((el) => {el.style.display = 'none';});
      dogsImagesInvert.forEach((el) => {el.style.display = 'none';});
      dogsImagesPencil.forEach((el) => {el.style.display = 'inline';});
      modalBackground.forEach((el) => {el.style.background = 'black';});
      toMain.forEach((el) => {
        el.style.background = 'black';
        el.style.border = `2px solid #555555`;
        el.style. color = '#555555';
      });
      modalTittle.forEach((el) => {el.style.color = '#555555'});
    };
  }
}

/*
import { ModalWindow } from "./components/index";
new ModalWindow('perfect').showWindow();    param: 'game-over' or 'perfect'
*/
