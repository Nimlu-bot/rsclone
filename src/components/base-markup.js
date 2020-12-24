export class BaseMarkup {
    init() {
        document.body.insertAdjacentHTML(
            "afterbegin",
            `
        <header>
            <h1 class = "header-title">RSClone</h1>
        </header>
        <main>
        <div class = "wrapper">
            <div class = "main-window">   
            </div>
            <div class = "Stat window">
            </div>
        </div>
        </main>
        <footer>
            <div class = "footer-dev-ops">
                <ul class = "dev-ops-list">
                    <li class = "dev-ops-list-person">Developers: </li>
                    <li class = "dev-ops-list-person"><a href = # class = "dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>User1</p></a></li>
                    <li class = "dev-ops-list-person"><a href = # class = "dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>User2</p></a></li>
                    <li class = "dev-ops-list-person"><a href = "https://github.com/nimlu-bot" class = "dev-ops-ref"><img class = "footer-github-logo" src = "assets/img/github.svg"><p>Sergey Nesterov</p></a></li>
                </ul>
                <h3 class = "footer-create-year">2020</h3>
                <a href = "https://rs.school/js/" class = "footer-rs-ref"><img class = "footer-rs-logo" src = "assets/img/rs-school-js.svg"></a>
            </div>
        </footer>
        
        `
        );
    }
}
