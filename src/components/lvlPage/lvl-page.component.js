import { headerTemplate } from "../header/header.template";
import {lvlBoxTemplate, levelItemTemplate} from "./lvl-page.template"
import {NUMBER_OF_LVLS} from '../../core/constants';
import './lvl-page.component.scss';

export default class LvlvPage{
    constructor(){
        this.pageName='Levels'; // это добавляем в header? 
    }
    
    init() {
        const header = document.querySelector(".header");
        if(header) header.remove();
        const wrapper = document.querySelector(".wrapper");
        wrapper.insertAdjacentHTML("afterbegin", headerTemplate(this.pageName));

        const main = document.querySelector(".main");
        main.innerHTML='';
        main.insertAdjacentHTML("beforeend", lvlBoxTemplate);

        const lvlList = document.querySelector(".lvl-page-lvl-list");
        for (let i = 1; i <= NUMBER_OF_LVLS; i += 1) {
          lvlList.insertAdjacentHTML("beforeend", levelItemTemplate(i));
        }
    }
}