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
   <tr >
    <th>№</th>
    <th>${lang[getLang()].name}</th>
    <th>${lang[getLang()].ducks}</th>
		<th>${lang[getLang()].hits}</th>
		<th>${lang[getLang()].persent}</th>
		<th>${lang[getLang()].score}</th>
	 </tr>
	 </tbody>
	 </table>
	 <button class = "get-stat">Получить</button>
	 <button class = "set-stat">Отправить</button>
	 <button class = "to-local">В локал</button>
`;
export const statisticsTemplate = (userStat, number) => {
    const persent = Math.ceil((userStat.ducks / userStat.hits) * 100);
    return `
		
	 <tr><td>${number}</td><td>${userStat.name}</td><td>${userStat.ducks}</td><td>${userStat.hits}</td><td>${persent}</td><td>${userStat.score}</td></tr>
	 
		
`;
};
