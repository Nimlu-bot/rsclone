import "./svg-animation.component.scss";

export const loadingBtnTemplate = () => {
  return `
  
  <div class="duck-aim"></div>
  <div class="animation-text"></div>
  <div class="animation-bullet"></div>
  <div class="animation-button">
    <button type="button" id="svg-button"><span>Loading...</span></button>
  </div>
  `;
}
