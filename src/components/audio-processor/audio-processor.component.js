import { audioProcessorTemplate } from './audio-processor.template'

export class AudioProcessor {
  constructor() {
 
  }

  init() {
    document.body.insertAdjacentHTML("afterbegin", audioProcessorTemplate());
    
    this.bark = document.querySelector('#bark');
    this.deadFals = document.querySelector('#dead-duck-falls');
    
    //web audio API
    const audioContext = new AudioContext();
    const track1 = audioContext.createMediaElementSource(this.bark);
    const track2 = audioContext.createMediaElementSource(this.deadFals);

    // select our play button
const playButton = document.querySelector('#sound-btn');
playButton.addEventListener('click', () => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (playButton.dataset.playing === 'false') {
      this.bark.play();
      this.deadFals.play();
      playButton.dataset.playing = 'true';
    } else if (playButton.dataset.playing === 'true') {
      this.bark.pause();
      this.deadFals.pause();
      playButton.dataset.playing = 'false';
    }

}, false);

const gainNode = audioContext.createGain();
track1.connect(gainNode).connect(audioContext.destination);
track2.connect(gainNode).connect(audioContext.destination);
window.tt = track1;

const volumeControl = document.querySelector('#volume');
volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);

  }


  stopSound(soundName) {
    this[soundName].pause();
  }
};
