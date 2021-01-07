import './statistics.component.scss';
import { lang, getLang } from '../../core/index';

export const statisticsWrapperTemplate = `
<div class = "stat-wrapper"></div>
`;

export const statisticsTemplate = (userStat, number) => {
    const persent = Math.ceil((userStat.ducks / userStat.hits) * 100) || lang[getLang()].persent;
    return `
		<div class = "row-wrapper">
		<div class = "stat-number">${number}</div>
		<div class = "stat-name">${userStat.name}</div>
		<div class = "stat-ducks">${userStat.ducks}</div>
		<div class = "stat-shots">${userStat.hits}</div>
		<div class = "stat-persent">${persent}</div>
		<div class = "stat-score">${userStat.score}</div>
		</div>
`;
};
