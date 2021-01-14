import "./modal-window.component.scss";
import gameOverDog from "../../assets/img/game_over_dog.png"
import perfectDog from "../../assets/img/perfect_dog.png"


export const modalWindowTemplate = (name) => {
  const gameOverWindow = `
  <div id="modal-window" class="modal-hidden">
    <h2>Bad hunt Dude!</h2>
    <img src=${gameOverDog} alt="dog">
    <button type="button" id="to-main">Close</button>
  </div>
  `;

  const perfectWindow = `
  <div id="modal-window" class="modal-hidden">
    <h2>Awesome hunter</h2>
    <img src=${perfectDog} alt="dog">
    <button type="button" id="to-main">Close</button>
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
