// fedya
import { FirstPages } from "./components/index";
import { SvgAnimation } from "./components/svg-animation/index";

const firstPages = new FirstPages();
// firstPages.init();

// ---
const svgAnimation = new SvgAnimation();
svgAnimation.makeGood();
svgAnimation.getButton().addEventListener('click', () => {
  svgAnimation.removeAll();
  firstPages.init();
})
