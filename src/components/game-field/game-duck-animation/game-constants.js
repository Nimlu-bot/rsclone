export const ducksForGame = {
    duck1:{
        isLive:true,
        duckFall:false, 
        moveX:400,
        moveY:510,
        fallY:0,
        fallX:0,
        goAwX:0,
        goAwY:0,
        num:0,
        timeAfterDeath:0,
        timeAfterStartFly:0
    },
    duck2:{
        isLive:true,
        duckFall:false, 
        moveX:350,
        moveY:510,
        fallY:0,
        fallX:0,
        goAwX:0,
        goAwY:0,
        num:3,
        timeAfterDeath:0,
        timeAfterStartFly:0
    }
};

export const progressForGame = {
    level:1,
    ducksInCurrentLvl:0, // вылетевшие на данном уровне утки
    cruckDuck:0, // ушедшие любым способом утки
    shotDucks:0, // застреленные утки
    goAwayducks:0, // улетевшие утки
    currentTwoDucksCruck:0, // ушла ли любым свособом текущая пара уток
    bullet:4 // оставшиеся пули
} 