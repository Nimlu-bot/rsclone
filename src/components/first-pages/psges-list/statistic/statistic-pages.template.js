import "../../../../assets/css/general-style.scss";
import "./statistic-pages.component.scss";

import { lang } from "../../../../core/config";

export const statisticPagesTemplate = `
<div class="statistic-wrap">
<div class ="stat-message"></div>
    <div class="statistic-btn game-btn" id="statistic-back">back</div>
  
</div>
`;

export const statisticTableHeader = (language) => {
    return `
<table border class="stat-table">
	<caption>${lang[language].statisticsTable} </caption>

	<tbody class= "stat-table-body">
		<tr class = "stat-table-header" >
			<th>№</th>
			<th>${lang[language].time}</th>
			<th>${lang[language].ducks}</th>
			<th>${lang[language].hits}</th>
			<th>${lang[language].persent}</th>
			<th>${lang[language].score}</th>
		</tr>
	</tbody>
</table>

<div class="info-btn">
	 <div class = "game-btn stat-get hided">Получить</div>
	 <div class = "game-btn stat-set hided">Записать</div>
	 <div class = "game-btn stat-reset">Удалить</div>
	 <div class = "game-btn stat-server-set hided ">Записать на <br> сервер</div>
	 <div class = "game-btn stat-server-get hided">Получить с <br> сервера</div>
</div>
`;
};

export const statisticsTemplate = (userStat, number) => {
    const persent = Math.ceil((userStat.kills / userStat.ducks) * 100);
    const date = new Date(userStat.time);
    const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };

    return `
		
	 <tr class = "stat-table-item" ><td>${number}</td><td>${date.toLocaleString("ru-RU", options)}</td><td>${
        userStat.ducks
    }</td><td>${userStat.kills}</td><td>${persent}</td><td>${userStat.score}</td></tr>
	 
		
`;
};
