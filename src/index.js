import { FirstPages } from "./components/index";
import { SvgAnimation } from "./components/svg-animation/index";
import { ModalWindow } from "./components/modal-window/index";

const firstPages = new FirstPages();

new ModalWindow('perfect').createWindow();
new ModalWindow('game-over').createWindow();

const svgAnimation = new SvgAnimation();
svgAnimation.makeGood();
svgAnimation.getButton().addEventListener('click', () => {
  svgAnimation.removeAll();
  firstPages.init();
});
