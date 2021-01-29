import { lang, getLang } from "../../../../core/index";


export function setFootHeadLang(){
    document.querySelector(".pages").innerHTML = `${lang[getLang()].statistic}`

    document.querySelector('.footer').innerHTML = `
    <div class="content">

    <a class="logo-box" href = "https://rs.school/js/"><img class="rs-logo" src="../../assets/img/rs-school-js.svg" alt="rs-logo" /></a>

    <ul class="autor">
        <li><a class="autor-Name" href = https://github.com/tone4ka ><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />${lang[getLang()].tonia}</a></li>
        <li><a class="autor-Name" href = "https://github.com/Mikulich-Fedor"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />${lang[getLang()].fedos}</a></li>
        <li><a class="autor-Name" href = "https://github.com/nimlu-bot"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />${lang[getLang()].sergey}</a></li>
        <li><a class="autor-Name" href = "https://github.com/andreykomov"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />${lang[getLang()].andrey}</a></li>
    </ul>
    <div class="year">2021</div>

    </div>
    `
}

