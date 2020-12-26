export class BaseMarkup {
    init() {
        document.body.insertAdjacentHTML(
            "afterbegin",
            `
        <header class="header">
						<h1 class = "header-title">RSClone</h1>
						<h2 clas = "header-subtitle">DUCK HUNT</h2>
        </header>
        <main class="main"></main>
        <footer class="footer">
            <div class = "footer-dev-ops">
                <ul class = "footer-dev-ops-list">
                    <li class = "footer-dev-ops-list-person">Developers: </li>
                    <li class = "footer-dev-ops-list-person"><a href = https://github.com/tone4ka class = "footer-dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>Antonina Mikulich</p></a></li>
                    <li class = "footer-dev-ops-list-person"><a href = "https://github.com/Mikulich-Fedor" class = "footer-dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>Fedor Mikulich </p></a></li>
                    <li class = "footer-dev-ops-list-person"><a href = "https://github.com/nimlu-bot" class = "footer-dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>Sergey Nesterov</p></a></li>
                </ul>
                <h3 class = "footer-create-year">2020</h3>
                <a href = "https://rs.school/js/" class = "footer-rs-ref"><img class = "footer-rs-logo" src = "assets/img/rs-school-js.svg"></a>
            </div>
				</footer>
        `
        );
    }
}
