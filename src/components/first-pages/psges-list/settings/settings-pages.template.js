import "../../../../assets/css/general-style.scss";
import "./settings-pages.component.scss";

export const settingsPagesTemplate = `
<div class="settings-wrap">
    <ul>
        <li>
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
				</li>
				<li class="lang-container"><p class="settings-lang selected">EN</p><p class="settings-lang">RU</p><p class="settings-lang">BY</p></li>
        <li class="settings-btn game-btn" id="settings-back">back</li>
    </ul>
</div>
`;
