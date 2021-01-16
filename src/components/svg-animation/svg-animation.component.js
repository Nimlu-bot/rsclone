import { duckTemplate } from './duck.template';
import { aimTemplate } from './aim.template';
import { textTemplate } from './text.template';
import { bulletTemplate } from './bullet.template';
import { loadingBtnTemplate } from './loading.btn.template';

export class SvgAnimation {

  makeGood() {
    this.loadingBtn(document.body);
    setTimeout(() => this.bullet(document.querySelector('.animation-bullet')), 1000);
    setTimeout(() => this.duck(document.querySelector('.duck-aim')), 2000);
    setTimeout(() => this.aim(document.querySelector('.duck-aim')), 5000);
    setTimeout(() => this.text(document.querySelector('.animation-text')), 8000);
    setTimeout(() => {
      this.getButton().classList.add('end-loading');
      this.getButton().innerText='Click here!'
    }, 11000);

  }

  bullet(tag) {
    tag.insertAdjacentHTML("afterBegin", bulletTemplate());
  }

  loadingBtn(tag) {
    tag.insertAdjacentHTML("afterBegin", loadingBtnTemplate());
  }

  duck(tag) {
    tag.insertAdjacentHTML("afterBegin", duckTemplate());
  }

  aim(tag) {
    tag.insertAdjacentHTML("afterBegin", aimTemplate());
  }

  text(tag) {
    tag.insertAdjacentHTML("afterBegin", textTemplate());
  }

  getButton() {
    return document.querySelector('#svg-button');
  }

  removeAll() {
    const duck = document.querySelector('#svg-duck');
    if (duck) {
      duck.remove();
    }

    const aim = document.querySelector('#svg-aim');
    if (aim) {
      aim.remove();
    }

    const text = document.querySelector('#svg-text');
    if (text) {
      text.remove();
    }

    const bullet = document.querySelector('#svg-bullet');
    if (bullet) {
      bullet.remove();
    }

    const btn = this.getButton();
    if (btn) {
      btn.remove();
    }
  }


}