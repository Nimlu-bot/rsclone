import "../../../../assets/css/general-style.scss";
import "./settings-pages.component.scss";

export const settingsPagesTemplate = `
<div class="settings-wrap">
    <div class="audio-container">
        <div class="volume-container">
            <img class="audio-img" src="../../../../assets/img/sound.png">
            <input type="range" id="volume" min="0" max="2" value="1" step="0.01" class="input-slider">
        </div>

        <div class="panner-container">
            <span>L</span>
            <input type="range" id="panner" min="-1" max="1" value="0" step="0.01" class="input-slider">
            <span>R</span>
        </div>
    </div>

    <div class="lang-container"><p class="settings-lang">EN</p><p class="settings-lang">RU</p><p class="settings-lang">BY</p></div>
    <div class="theme-wrapp">
        <input type="radio" name="input_theme" value="0">
        <input type="radio" name="input_theme" value="1">
        <input type="radio" name="input_theme" value="2">
        <input type="radio" name="input_theme" value="3">
    </div>
    <div class="settings-btn game-btn" id="settings-back">back</div>
</div>
`;
