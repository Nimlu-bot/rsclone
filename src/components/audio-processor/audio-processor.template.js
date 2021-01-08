import "./audio-processor.component.scss";
import au1 from "../../assets/audio/au1.mp3";
import au2 from "../../assets/audio/au2.mp3";
// const au1 = require('./au1.mp3');

export const audioProcessorTemplate = () => {
  console.log(au1);
  return `
    <button data-playing="false" role="switch" aria-checked="false" id="sound-btn">
    <span>Play/Pause</span>
    </button>
    <input type="range" id="volume" min="0" max="2" value="1" step="0.01">

    <audio controls src=${au1} id="bark"></audio>
    <audio controls src=${au2} id="dead-duck-falls"></audio>
  `;
};
