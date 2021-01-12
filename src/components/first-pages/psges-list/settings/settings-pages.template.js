import "../../../../assets/css/general-style.scss";
import "./settings-pages.component.scss";

export const settingsPagesTemplate = `
<div class="settings">
    <ul>
        <li class="settings-btn">settings</li>
        <li>
            <div class="audio-container">
        <div class="volume-container">
            <span>Vol:</span>
            <input type="range" id="volume" min="0" max="2" value="1" step="0.01">
        </div>

        <div class="panner-container">
            <span>L</span>
            <input type="range" id="panner" min="-1" max="1" value="0" step="0.01">
            <span>R</span>
        </div>
        </div>
        </li>
        <li class="settings-btn game-btn" id="settings-back">back</li>
    </ul>
</div>
`;