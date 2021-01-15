import '../../../../assets/css/general-style.scss';
import './statistic-pages.component.scss';

import { lang, getLang } from '../../../../core/index';

export const statisticPagesTemplate = `
<div class="statistic">

    <ul>
        <li class="statistic-btn">statistic</li>
        <li class="statistic-btn game-btn" id="statistic-back">back</li>
    </ul>
</div>
`;

export const statisticTableHeader = `
<table border class="stat-table">
	 <caption>Таблица статистики</caption>
	 <tbody class= "stat-table-body">
   <tr class = "stat-table-header" >
    <th>№</th>
    <th>${lang[getLang()].time}</th>
    <th>${lang[getLang()].ducks}</th>
		<th>${lang[getLang()].hits}</th>
		<th>${lang[getLang()].persent}</th>
		<th>${lang[getLang()].score}</th>
	 </tr>
	 </tbody>
	 </table>
	 <button class = "stat-get">Получить</button>
	 <button class = "stat-set">Записать</button>
	 <button class = "stat-reset">Удалить</button>
	 <button class = "stat-server-set">Записать на сервер</button>
	 <button class = "stat-server-get">Получить с сервера</button>
`;
export const statisticsTemplate = (userStat, number) => {
    const persent = Math.ceil((userStat.ducks / userStat.hits) * 100);
    const date = new Date(userStat.time);

    return `
		
	 <tr class = "stat-table-item" ><td>${number}</td><td>${date.toLocaleString()}</td><td>${userStat.ducks}</td><td>${
        userStat.hits
    }</td><td>${persent}</td><td>${userStat.score}</td></tr>
	 
		
`;
};
