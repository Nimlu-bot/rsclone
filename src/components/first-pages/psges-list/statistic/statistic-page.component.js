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

        const statTableBody = document.querySelector('.stat-table-body');

        document.querySelector('.stat-get').addEventListener('click', () => {
            const statArray = JSON.parse(localStorage.getItem('userStat')) || [];
            document.querySelectorAll('.stat-table-item').forEach((e) => e.remove());
            for (let i = 0; i < statArray.length; i += 1) {
                statTableBody.insertAdjacentHTML('beforeend', statisticsTemplate(statArray[i], i + 1));
            }
            const maxScoreItem = statArray.reduce((acc, el) => (acc.score > el.score ? acc : el));
            console.log(maxScoreItem.score);
        });

        document.querySelector('.stat-set').addEventListener('click', () => {
            const userStat = {
                time: new Date(),
                ducks: Math.trunc(Math.random() * 100),
                hits: Math.trunc(Math.random() * 100),
                kills: Math.trunc(Math.random() * 100),
                score: Math.trunc(Math.random() * 1000)
            };
            const statArray = JSON.parse(localStorage.getItem('userStat')) || [];
            statArray.push(userStat);
            localStorage.setItem('userStat', JSON.stringify(statArray));
        });

        document.querySelector('.stat-reset').addEventListener('click', () => {
            document.querySelectorAll('.stat-table-item').forEach((e) => e.remove());
            localStorage.removeItem('userStat');
        });
    }
}

// -----------
