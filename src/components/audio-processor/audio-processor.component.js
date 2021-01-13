import { audioProcessorTemplate } from './audio-processor.template'


class AudioProcessor {
  constructor() {
    this.init();
  }

  init() {
    document.body.insertAdjacentHTML("beforeBegin", audioProcessorTemplate());

    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.pannerOptions = { pan: 0 };
    this.panner = new StereoPannerNode(this.audioContext, this.pannerOptions);

    // all sounds
    this.bark = this.createMediaElement(document.querySelector('#bark'));
    this.bonusRound = this.createMediaElement(document.querySelector('#bonus-round'));
    this.breakTime = this.createMediaElement(document.querySelector('#break-time'));
    this.clay = this.createMediaElement(document.querySelector('#clay'));
    this.countingHits = this.createMediaElement(document.querySelector('#counting-hits'));
    this.duckDeath = this.createMediaElement(document.querySelector('#dead-duck-falls'));
    this.dogLaughs = this.createMediaElement(document.querySelector('#dog-laughs'));
    this.dogShowsDucks = this.createMediaElement(document.querySelector('#dog-shows-ducks'));
    this.intro = this.createMediaElement(document.querySelector('#duck-hunt-intro'));
    this.quack = this.createMediaElement(document.querySelector('#duck-quack'));
    this.gameOver = this.createMediaElement(document.querySelector('#game-over'));
    this.registration = this.createMediaElement(document.querySelector('#name-registration'));
    this.perfect = this.createMediaElement(document.querySelector('#perfect'));
    this.clear = this.createMediaElement(document.querySelector('#round-clear'));
    this.shot = this.createMediaElement(document.querySelector('#shot'));
    this.tittle = this.createMediaElement(document.querySelector('#tittle'));
    this.fail = this.createMediaElement(document.querySelector('#you-failed'));
    /* window.qq = this.intro;
    window.zz = this.registration; */ // it's for testing
  }

  createMediaElement(tagAudio) {
    const audioWithEffects = this.audioContext.createMediaElementSource(tagAudio);
    audioWithEffects.connect(this.gainNode).connect(this.panner).connect(this.audioContext.destination);
    return audioWithEffects;
  }

  audio(name) {
    return this[name].mediaElement;
  }

  play(name) {
    if (this[name] && this[name].mediaElement) {
      this[name].mediaElement.play();
    }
  }

  pause(name) {
    if (this[name] && this[name].mediaElement) {
      this[name].mediaElement.pause();
    }
  }

  reset(name) {
    if (this[name] && this[name].mediaElement) {
      this[name].mediaElement.currentTime = 0;
    }
  }

  setVolume(volume) {
    this.gainNode.gain.value = volume;
  }

  setPan(pan) {
    this.panner.pan.value = pan;
  }

  get gain() {
    return this.gainNode.gain.value;
  }

  get pan() {
    return this.panner.pan.value;
  }

};
export default new AudioProcessor();


/* for other
import AudioProcessor from "./components/audio-processor/audio-processor.component";
for example:
AudioProcessor.play('bark');
AudioProcessor.pause('bark');
AudioProcessor.reset('bark');
AudioProcessor.setVolume(number); [0, 2]
AudioProcessor.setPan(number); [-1, 1]
 */