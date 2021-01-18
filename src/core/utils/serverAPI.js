const axios = require('axios');

export function statEventHandler() {
    const gameStat = {
        time: new Date(),
        ducks: Math.trunc(Math.random() * 100),
        hits: Math.trunc(Math.random() * 100),
        kills: Math.trunc(Math.random() * 100),
        score: Math.trunc(Math.random() * 1000)
    };
    const token = localStorage.getItem('token');
    axios
        .post('http://localhost:4000/api/stat/save', gameStat, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error.response.data.message);
            }
        );
}

export function getStatEventHandler() {
    const token = localStorage.getItem('token');
    axios
        .get('http://localhost:4000/api/stat', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(
            (response) => {
                localStorage.setItem('userStat', JSON.stringify(response.data));
            },
            (error) => {
                console.log(error.response.data.message);
            }
        );
}
