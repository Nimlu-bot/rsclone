// fedya
    import { FirstPages} from "./components/index";
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

/* 
const svgAnimation = new SvgAnimation();
svgAnimation.makeGood( add button);
svgAnimation.getButton().addEventListener('click', () => {
    svgAnimation.removeAll();
    firstPages.init();
})

pointer-events: "none" for button
*/