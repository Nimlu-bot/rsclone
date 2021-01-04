import {audioProcessorTemplate} from './audio-processor.template'

export class AudioProcessor {
  constructor() {
    /* this.bark = 
    this.shoot = */
  }

  init() {
    document.body.insertAdjacentHTML("afterbegin", audioProcessorTemplate());
    this.bark = document.querySelector('#bark');
}

stopSound(soundName) {
  this[soundName].pause();
}
};
