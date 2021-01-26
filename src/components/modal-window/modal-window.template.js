import "./modal-window.component.scss";
import perfectDog from "../../assets/img/dog_perfect.png";
import gameOverDog from "../../assets/img/game_over_dog.png";
import perfectDogInvert from "../../assets/img/dog_perfectInv.png";
import gameOverDogInvert from "../../assets/img/game_over_dogInv.png";
import perfectDogPencil from "../../assets/img/perfect_dogChB.png"
import gameOverDogPencil from "../../assets/img/game_over_dogChB.png"
import { lang } from '../../core/index';


export const modalWindowTemplate = (name, language) => {
  const gameOverWindow = `
  <div id="modal-window" class="modal-game-over-hidden">
    <h2 class="modal-game-over-h2 modal-for-theme">${lang[language].badHuntDude}</h2>
    <img src=${gameOverDog} alt="dog" class="dog-origin">
    <img src=${gameOverDogInvert} alt="dog" class="dog-invert">
    <img src=${gameOverDogPencil} alt="dog" class="dog-pencil">
    <button type="button" id="to-main">${lang[language].close}</button>
  </div>
  `;

  const perfectWindow = `
  <div id="modal-window" class="modal-perfect-hidden">
    <h2 class="modal-perfect-h2 modal-for-theme">${lang[language].awesomeHunter}</h2>
    <img src=${perfectDog} alt="dog" class="dog-origin">
    <img src=${perfectDogInvert} alt="dog" class="dog-invert">
    <img src=${perfectDogPencil} alt="dog" class="dog-pencil">
    <button type="button" id="to-main">${lang[language].close}</button>
  </div>
  `;

  if (name === 'game-over') {
    return gameOverWindow
  };
  
  if (name === 'perfect') {
    return perfectWindow
  };

  return '';
};
