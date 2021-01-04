//import "./header.component.scss";
import au1 from "./au1.mp3";
// const au1 = require('./au1.mp3');

export const audioProcessorTemplate = () => {
  console.log(au1);
    return `
  <audio controls src=${au1} id="bark"></audio>
  <audio controls src="au1.mp3"></audio>
`;
};
