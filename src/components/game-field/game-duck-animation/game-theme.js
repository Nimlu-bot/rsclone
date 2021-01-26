export function changeBkgrnd(theme) {
    const bkgrnd = document.querySelector(".game-field-main");
    switch (theme) {
        case 1:
            bkgrnd.style.background = "#FFFFFF";
            break;
        case 2:
        case 3:
            document.body.style.backgroundImage = "url(../../../assets/img/mramor.png)";
            bkgrnd.style.background = "#000000";
            break;
        default:
            break;
    }
}
