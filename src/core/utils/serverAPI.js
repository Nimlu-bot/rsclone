import { API_BASE_URL_PROD, API_BASE_URL_DEV, CURRENT_API } from "../constants";

const axios = require("axios");

const apiUrl = CURRENT_API === "dev" ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export function statEventHandler(stat) {
    if (stat) {
        const token = localStorage.getItem("token");
        axios
            .post(`${apiUrl}/api/stat/save`, stat, {
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
        .get(`${apiUrl}/api/stat`, {
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

export async function getScoreEventHandler() {
    axios.get(`${apiUrl}/api/stat/all`).then(
        (response) => {
            const scores = response.data;
            for (let i = 0; i < scores.length; i += 1) {
                // eslint-disable-next-line no-underscore-dangle
                delete scores[i]._id;
                if (scores[i].stats.length !== 0) {
                    const maxScoreItem = scores[i].stats.reduce((acc, el) => (acc.score > el.score ? acc : el));
                    // console.log(maxScoreItem.score);
                    scores[i].score = maxScoreItem.score;
                    // console.log(scores[i]);
                } else {
                    scores[i].score = 0;
                }
            }
            // console.log(scores);
            localStorage.setItem("totalScores", JSON.stringify(scores));
        },

        (error) => {
            console.log(error.response.data.message);
        }
    );
}
