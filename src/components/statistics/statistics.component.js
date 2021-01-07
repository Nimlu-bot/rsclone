import { statisticsTemplate, statisticsWrapperTemplate } from './statistics.template';
import { lang, getLang } from '../../core/index';

const axios = require('axios');

export class Statistics {
    constructor() {
        this.lang = getLang();
    }

    init() {
        const main = document.querySelector('.main');

        main.innerHTML = '';

        const statHeader = {
            name: lang[getLang()].name,
            ducks: lang[getLang()].ducks,
            hits: lang[getLang()].hits,
            score: lang[getLang()].score
        };
        main.insertAdjacentHTML('afterbegin', statisticsWrapperTemplate);

        const statWrapper = document.querySelector('.stat-wrapper');

        statWrapper.insertAdjacentHTML('afterbegin', statisticsTemplate(statHeader, '№'));

        for (let i = 1; i <= 10; i += 1) {
            const stat = {
                name: Math.random(),
                ducks: Math.trunc(Math.random() * 100),
                hits: Math.trunc(Math.random() * 100),
                score: Math.trunc(Math.random() * 3000)
            };
            statWrapper.insertAdjacentHTML('beforeend', statisticsTemplate(stat, i));
        }
    }
}
