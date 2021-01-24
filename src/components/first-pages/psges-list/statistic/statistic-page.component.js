// потом удалить
import {
    statisticPagesTemplate,
    statisticsTemplate,
    statisticTableHeader,
    scoreTableHeader,
    statisticSwicher
} from "./statistic-pages.template";
import { getLang, statEventHandler, getStatEventHandler, lang, getScoreEventHandler } from "../../../../core/index";

export class Statistics {
    constructor() {
        this.lang = getLang();
    }

    init() {
        const main = document.querySelector(".game-menu");

        main.insertAdjacentHTML("afterbegin", statisticPagesTemplate);
        document.querySelector(".statistic-wrap").insertAdjacentHTML("afterbegin", statisticSwicher(this.lang));

        const statWrapper = document.querySelector(".statistic-table-wrapper");

        statWrapper.insertAdjacentHTML("afterbegin", statisticTableHeader(this.lang));

        const statTableBody = document.querySelector(".stat-table-body");
        if (localStorage.getItem("userStat")) {
            getStatEventHandler().then(this.getStat("userStat"));
        } else {
            document.querySelector(".stat-message").innerText = `${lang[getLang()].NoAuthorization}`;
            this.getStat("currentUserStat");
        }

        document.querySelector(".stat-get").addEventListener("click", () => {
            const statArray = JSON.parse(localStorage.getItem("userStat")) || [];
            const sortedStatArr = statArray.sort((a, b) => b.score - a.score);
            document.querySelectorAll(".stat-table-item").forEach((e) => e.remove());
            let numberOfResult = null;
            if (sortedStatArr.length < 10) {
                numberOfResult = sortedStatArr.length;
            } else numberOfResult = 10;
            for (let i = 0; i < numberOfResult; i += 1) {
                statTableBody.insertAdjacentHTML("beforeend", statisticsTemplate(sortedStatArr[i], i + 1));
            }
            // const maxScoreItem = statArray.reduce((acc, el) => (acc.score > el.score ? acc : el));
            // console.log(maxScoreItem.score);
        });

        document.querySelector(".stat-set").addEventListener("click", () => {
            const userStat = {
                time: new Date(),
                ducks: Math.trunc(Math.random() * 100),
                hits: Math.trunc(Math.random() * 100),
                kills: Math.trunc(Math.random() * 100),
                score: Math.trunc(Math.random() * 1000)
            };
            const statArray = JSON.parse(localStorage.getItem("userStat")) || [];
            statArray.push(userStat);
            localStorage.setItem("userStat", JSON.stringify(statArray));
        });

        document.querySelector(".stat-reset").addEventListener("click", () => {
            document.querySelectorAll(".stat-table-item").forEach((e) => e.remove());
            localStorage.removeItem("userStat");
        });

        document.querySelector(".stat-server-set").addEventListener("click", () => {
            statEventHandler();
        });

        document.querySelector(".stat-server-get").addEventListener("click", () => {
            getScoreEventHandler();
        });

        document.querySelector(".stat-user").addEventListener("click", () => {
            console.log("1");
        });
        document.querySelector(".stat-total").addEventListener("click", () => {
            statWrapper.innerHTML = "";

            console.log("2");
        });
    }

    getStat(key) {
        const statArray = JSON.parse(localStorage.getItem(key)) || [];
        const statTableBody = document.querySelector(".stat-table-body");
        const sortedStatArr = statArray.sort((a, b) => b.score - a.score);

        document.querySelectorAll(".stat-table-item").forEach((e) => e.remove());
        let numberOfResult = null;
        if (sortedStatArr.length < 10) {
            numberOfResult = sortedStatArr.length;
        } else numberOfResult = 10;
        for (let i = 0; i < numberOfResult; i += 1) {
            statTableBody.insertAdjacentHTML("beforeend", statisticsTemplate(sortedStatArr[i], i + 1));
        }
    }
}

// -----------
