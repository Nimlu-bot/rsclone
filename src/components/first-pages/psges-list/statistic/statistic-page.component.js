// потом удалить
import { statisticPagesTemplate, statisticsTemplate, statisticTableHeader } from './statistic-pages.template';
import { lang, getLang } from '../../../../core/index';

export class Statistics {
    constructor() {
        this.lang = getLang();
    }

    init() {
        const main = document.querySelector('.game-menu');

        main.insertAdjacentHTML('afterbegin', statisticPagesTemplate);

        const statWrapper = document.querySelector('.statistic');

        statWrapper.insertAdjacentHTML('afterbegin', statisticTableHeader);

        const statTableHeader = document.querySelector('.stat-table-body');

        for (let i = 1; i <= 10; i += 1) {
            const stat = {
                name: Math.random(),
                ducks: Math.trunc(Math.random() * 100),
                hits: Math.trunc(Math.random() * 100),
                score: Math.trunc(Math.random() * 3000)
            };
            statTableHeader.insertAdjacentHTML('beforeend', statisticsTemplate(stat, i));
        }

        document.querySelector('.get-stat').addEventListener('click', () => {
            console.log('get');
        });

        document.querySelector('.set-stat').addEventListener('click', () => {
            console.log('set');
        });

        document.querySelector('.to-local').addEventListener('click', () => {
            console.log(' to local');
        });
    }
}

// -----------
