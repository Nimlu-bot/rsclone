const LevelItemTemplate = (levelNumber) => {
  return `
<div class="lvl" data=${levelNumber}>
<img class="footprints" src = "../../assets/img/footprints.png" >
<div class="lvl-text">Level${levelNumber}</div> 
<img class="footprints" src = "../../assets/img/footprints.png" >
</div>
`;
};

const lvlList = document.querySelector(".lvl-list");
const NUMBER_OF_LVLS = 10;
for (let i = 1; i <= NUMBER_OF_LVLS; i += 1) {
  lvlList.insertAdjacentHTML("beforeend", LevelItemTemplate(i));
}
