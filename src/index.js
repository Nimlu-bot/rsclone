// fedya
import { FirstPages} from "./components/index";
import { ModalWindow } from "./components/modal-window/index"

const firstPages = new FirstPages();
firstPages.init();

new ModalWindow('perfect').createWindow();
new ModalWindow('game-over').createWindow();



// ---

