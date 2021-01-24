const axios = require("axios");

export function statEventHandler(stat) {
    if (stat) {
        const token = localStorage.getItem("token");
        axios
            .post("http://localhost:4000/api/stat/save", stat, {
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
}

export async function getStatEventHandler() {
    const token = localStorage.getItem("token");
    axios
        .get("http://localhost:4000/api/stat", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(
            (response) => {
                localStorage.setItem("userStat", JSON.stringify(response.data));
            },
            (error) => {
                console.log(error.response.data.message);
            }
        );
}
async function sortUsers(array) {
    const el = {};
    const rez = [];
    for (let i = 0; i < array.length; i += 1) {
        el[i].email = array[i].email;
        console.log(el);
        // rez.push(el);
    }
}

export async function getScoreEventHandler() {
    axios.get("http://localhost:4000/api/stat/all").then(
        (response) => {
            const scores = response.data;
            for (let i = 0; i < scores.length; i += 1) {
                delete scores[i]._id;
                if (scores[i].stats.length !== 0) {
                    const maxScoreItem = scores[i].stats.reduce((acc, el) => (acc.score > el.score ? acc : el));
                    console.log(maxScoreItem.score);
                    scores[i].total = maxScoreItem.score;
                    console.log(scores[i]);
                } else {
                    scores[i].total = 0;
                }
            }
            console.log(scores);
            localStorage.setItem("totalScores", JSON.stringify(scores));
        },

        (error) => {
            console.log(error.response.data.message);
        }
    );
}
