import { headerTemplate } from "../header/header.template";
import create from '../../core/create';
import './lvlPage.scss';

export default class LvlvPage{
    constructor(){
        this.pageName='Levels'// это добавляем в header? ;
    }
    
    init() {
        // нельзя это одной функцией сделать, чтобы у меня this не терялось?
        const header = document.querySelector(".header");
        if(header) header.remove();
        const wrapper = document.querySelector(".wrapper");
        wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.pageName));

        const main = document.querySelector(".main");
        main.innerHTML='';
        const lvlBox = create('div', 'lvlBox', null, main);
        const lvlList = create('div', 'lvlList', null, lvlBox);
        const footprints = document.createElement('img');
        footprints.src = '../../assets/img/footprints.png'
        for (let i=1; i<=10; i+=1){
            // const footprints = document.createElement('img');
            // footprints.src = '../../assets/img/footprints.png';
           
            const lvl = create('div', 'lvl', null, lvlList, ['data', `${i}`]);
            create('img', 'footprints', null, lvl, ['src', '../../assets/img/footprints.png']);
            create('div', 'lvlText', `Level ${i}`, lvl);
            create('img', 'footprints', null, lvl, ['src', '../../assets/img/footprints.png']);
            // lvl.append(footprints);
        }
    }
}