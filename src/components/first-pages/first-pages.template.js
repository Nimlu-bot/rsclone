import "../../assets/css/nullstyle.scss";
import "./first-pages.component.scss";

export const firstPagesTemplate = `
<div class="wrapper">

<!-- header -->
    <div class="header">
    <div class="content">
        
        <h1>Duck Hunt</h1>
        <div class="pages">Game menu</div>
        
        <div class="pause-btn">
        <div class="user"><img class="user-img" src="../../assets/img/user.svg"></div>
        </div>
    </div>
    </div>

<!-- main -->
    <div class="main">
    <div class="content">

    <div class="game-place"></div>
    <div class="game-menu"></div>

    </div>       
    </div> 

<!-- footer-->
    <div class="footer">
    <div class="content">

    <a href = "#"><img class="rs-logo" src="../../assets/img/rs-school-js.svg" alt="rs-logo" /></a>

    <ul class="autor">
        <li><a href = https://github.com/tone4ka ><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />Antonina Zinkevich</a></li>
        <li><a href = "https://github.com/Mikulich-Fedor"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />Fedor Mikulich</a></li>
        <li><a href = "https://github.com/nimlu-bot"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />Sergey Nesterov</a></li>
        <li><a href = "https://github.com/andreykomov"><img class="git-logo" src="../../assets/img/github.svg" alt="git-logo" />Andrey Komov</a></li>
    </ul>

    </div>
    </div>

</div>
`;