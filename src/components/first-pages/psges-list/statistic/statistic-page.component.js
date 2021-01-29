// потом удалить
import {
    statisticPagesTemplate,
    statisticsTemplate,
    statisticTableHeader,
    scoreTableHeader,
    statisticSwicher,
    scoreTemplate
} from "./statistic-pages.template";
import {
    getLang,
    // statEventHandler,
    getStatEventHandler,
    lang,
    getScoreEventHandler
} from "../../../../core/index";

export class Statistics {
    constructor() {
        this.lang = getLang();
    }

    init() {
        const main = document.querySelector(".game-menu");

        main.insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        const statWrapper = document.querySelector(".statistic-table-wrapper");
        statWrapper.insertAdjacentHTML("afterbegin", statisticSwicher(this.lang));
        // this.setUserTable(statWrapper);
        const tabs = document.querySelectorAll(".stat-tab");
        [...tabs].forEach((el) => {
            el.classList.add("disabled");
        });
        getStatEventHandler();

        // document.querySelector(".stat-get").addEventListener("click", () => {
        //     const statArray = JSON.parse(localStorage.getItem("userStat")) || [];
        //     const sortedStatArr = statArray.sort((a, b) => b.score - a.score);
        //     document.querySelectorAll(".stat-table-item").forEach((e) => e.remove());
        //     let numberOfResult = null;
        //     if (sortedStatArr.length < 10) {
        //         numberOfResult = sortedStatArr.length;
        //     } else numberOfResult = 10;
        //     for (let i = 0; i < numberOfResult; i += 1) {
        //         statTableBody.insertAdjacentHTML("beforeend", statisticsTemplate(sortedStatArr[i], i + 1));
        //     }
        //     // const maxScoreItem = statArray.reduce((acc, el) => (acc.score > el.score ? acc : el));
        //     // console.log(maxScoreItem.score);
        // });

        // document.querySelector(".stat-set").addEventListener("click", () => {
        //     const userStat = {
        //         time: new Date(),
        //         ducks: Math.trunc(Math.random() * 100),
        //         hits: Math.trunc(Math.random() * 100),
        //         kills: Math.trunc(Math.random() * 100),
        //         score: Math.trunc(Math.random() * 1000)
        //     };
        //     const statArray = JSON.parse(localStorage.getItem("userStat")) || [];
        //     statArray.push(userStat);
        //     localStorage.setItem("userStat", JSON.stringify(statArray));
        // });

        //     document.querySelector(".stat-reset").addEventListener("click", () => {
        //         document.querySelectorAll(".stat-table-item").forEach((e) => e.remove());
        //         localStorage.removeItem("userStat");
        //     });

        //     document.querySelector(".stat-server-set").addEventListener("click", () => {
        //         statEventHandler();
        //     });

        //     document.querySelector(".stat-server-get").addEventListener("click", () => {
        //         getScoreEventHandler();
        //     });

        document.querySelector(".stat-user").addEventListener("click", (e) => {
            document.querySelector(".stat-table").remove();
            this.setUserTable(statWrapper);
            // const tabs = document.querySelectorAll(".stat-tab");

            [...tabs].forEach((el) => el.classList.remove("selected"));
            e.target.classList.add("selected");
        });
        document.querySelector(".stat-total").addEventListener("click", (e) => {
            document.querySelector(".stat-table").remove();
            getScoreEventHandler();

            this.setScoreTable(statWrapper);
            // const tabs = document.querySelectorAll(".stat-tab");
            [...tabs].forEach((el) => {
                el.classList.remove("selected");
                el.classList.add("disabled");
            });
            e.target.classList.add("selected");
        });

        document.addEventListener("getStat", () => {
            [...tabs].forEach((el) => {
                el.classList.remove("disabled");
            });
            this.setUserTable(statWrapper);
        });
        document.addEventListener("getScore", () => {
            const statTable = document.querySelector(".stat-table");
            if (statTable) statTable.remove();
            //  const tabs = document.querySelectorAll(".stat-tab");
            [...tabs].forEach((el) => {
                el.classList.remove("disabled");
            });
            this.setScoreTable(statWrapper);
        });
    }

    getStat(key, template) {
        const statArray = JSON.parse(localStorage.getItem(key)) || [];
        const statTableBody = document.querySelector(".stat-table-body");
        if (statTableBody) {
            const sortedStatArr = statArray.sort((a, b) => b.score - a.score);
            const items = document.querySelectorAll(".stat-table-item");
            if (items) items.forEach((e) => e.remove());
            let numberOfResult = null;
            if (sortedStatArr.length < 10) {
                numberOfResult = sortedStatArr.length;
            } else numberOfResult = 10;
            for (let i = 0; i < numberOfResult; i += 1) {
                statTableBody.insertAdjacentHTML("beforeend", template(sortedStatArr[i], i + 1));
            }
        }
    }

    setUserTable(item) {
        item.insertAdjacentHTML("beforeend", statisticTableHeader(this.lang));
        if (localStorage.getItem("userStat")) {
            this.getStat("userStat", statisticsTemplate);
        } else {
            document.querySelector(".stat-message").innerText = `${lang[getLang()].NoAuthorization}`;
            this.getStat("currentUserStat", statisticsTemplate);
        }
    }

    setScoreTable(item) {
        item.insertAdjacentHTML("beforeend", scoreTableHeader(this.lang));

        if (localStorage.getItem("totalScores")) {
            this.getStat("totalScores", scoreTemplate);
        } else {
            document.querySelector(".stat-message").innerText = `${lang[getLang()].NoAuthorization}`;
        }
    }
}

// -----------
