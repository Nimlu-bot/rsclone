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
