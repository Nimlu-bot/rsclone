import { getLvlStat } from '../../../core/index';

// вызывать при каждом событии в игре для отрисовки статистики
export function renderStat() {
    console.log(getLvlStat());
}
