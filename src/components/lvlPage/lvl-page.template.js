import './lvl-page.component.scss';

export const lvlBoxTemplate =`
<div class='lvl-page-lvl-box'>
<div class='lvl-page-lvl-list'>
</div>
</div>
`;

export const levelItemTemplate = (levelNumber) => {
    return `
  <div class='lvl-page-lvl' data=${levelNumber}>
  <img class='lvl-page-footprints' src = '../../assets/img/footprints.png' >
  <div class='lvl-page-lvl-text'>Level ${levelNumber}</div> 
  <img class='lvl-page-footprints' src = '../../assets/img/footprints.png' >
  </div>
  `;
  };
  
