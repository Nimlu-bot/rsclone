import { FirstPages } from "./components/index";
import { SvgAnimation } from "./components/svg-animation/index";
import { ModalWindow } from "./components/modal-window/index";
import AudioProcessor from "./components/audio-processor/audio-processor.component";

const firstPages = new FirstPages();

new ModalWindow('perfect').createWindow();
new ModalWindow('game-over').createWindow();

const svgAnimation = new SvgAnimation();
svgAnimation.makeGood();
svgAnimation.getButton().addEventListener('click', () => {
  svgAnimation.removeAll();
  AudioProcessor.init();
  firstPages.init();
});

document.body.addEventListener("reloadGameEvent", () => firstPages.init());
