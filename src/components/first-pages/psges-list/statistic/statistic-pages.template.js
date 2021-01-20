import "../../../../assets/css/general-style.scss";
import "./statistic-pages.component.scss";

import { lang, getLang } from "../../../../core/index";

export const statisticPagesTemplate = `
<div class="statistic-wrap">

    <div class="statistic-btn game-btn" id="statistic-back">back</div>
  
</div>
`;

export const statisticTableHeader = `
<table border class="stat-table">
	<caption>${lang[getLang()].statisticsTable} </caption>

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

<div class="info-btn">
	 <div class = "game-btn stat-get">Получить</div>
	 <div class = "game-btn stat-set">Записать</div>
	 <div class = "game-btn stat-reset">Удалить</div>
	 <div class = "game-btn stat-server-set">Записать на <br> сервер</div>
	 <div class = "game-btn stat-server-get">Получить с <br> сервера</div>
</div>
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
