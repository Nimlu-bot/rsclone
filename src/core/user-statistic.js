const levelSettings = {
    ducksTogether: 2,
    ducksPerRound: 10,
    ducksNeed: 5,
    shots: 3,
    scorePerDuck: 100
};

const gameStat = {
    ducks: null,
    hits: null,
    kills: null,
    score: null
};

const lvlStat = {
    ducksKillPerRound: 0,
    duckKillPerLevel: 0,
    duckCount: 0,
    ducksFlyAway: 0,
    ducksFlyAwayPerRound: 0,
    bulets: 0,
    hits: 0,
    score: 0
};

// начало игры
export function startGame() {
    gameStat.ducks = 0;
    gameStat.hits = 0;
    gameStat.kills = 0;
    gameStat.score = 0;
}

// начало уровня
export function statStart() {
    lvlStat.ducksKillPerRound = 0;
    lvlStat.duckKillPerLevel = 0;
    lvlStat.duckCount = 0;
    lvlStat.ducksFlyAway = 0;
    lvlStat.ducksFlyAwayPerRound = 0;
    lvlStat.bulets = 0;
    lvlStat.hits = 0;
    lvlStat.score = 0;
}

// на каждое попадание
export function isRoundEnd() {
    lvlStat.ducksKillPerRound += 1;
    lvlStat.score += levelSettings.scorePerDuck;
    lvlStat.duckKillPerLevel += 1;
    if (lvlStat.ducksKillPerRound + lvlStat.ducksFlyAwayPerRound === levelSettings.ducksTogether) {
        return true;
    }
    return false;
}

// если убили 2 утки из 2, т.е isRoundEnd вернул true
export function newRound() {
    lvlStat.ducksKillPerRound = 0;
    lvlStat.ducksFlyAwayPerRound = 0;
    lvlStat.bulets = 0;
}

// при начале нового раунда (вылета 2 новых уток)
export function incDuckCount() {
    lvlStat.duckCount += levelSettings.ducksTogether;
}

// если утка улетела
export function incDuckFlyAway() {
    lvlStat.ducksFlyAway += 1;
    lvlStat.ducksFlyAwayPerRound += 1;
}

// при выстреле
export function isBuletsEnd() {
    lvlStat.hits += 1;
    lvlStat.bulets += 1;
    if (lvlStat.bulets === levelSettings.shots) {
        return true;
    }
    return false;
}

// после окончания каждого раунда
export function isLevelEnd() {
    if (
        lvlStat.duckCount === levelSettings.ducksPerRound &&
        lvlStat.duckKillPerLevel + lvlStat.ducksFlyAway === levelSettings.ducksPerRound
    ) {
        return true;
    }
    return false;
}

// при окончании уровня  т.е isLevelEnd вернул true
export function isWin() {
    gameStat.ducks += levelSettings.ducksPerRound;
    gameStat.hits += lvlStat.hits;
    gameStat.kills += lvlStat.duckKillPerLevel;
    gameStat.score += lvlStat.score;
    console.log(gameStat);
    if (lvlStat.duckKillPerLevel >= levelSettings.ducksNeed) {
        return true;
    }
    return false;
}

export function getStat() {
    return gameStat;
}

export function getLvlStat() {
    return lvlStat;
}
