import "./header.component.scss";

export const headerTemplate = (pageName) => {
    return `
	<header class="header">
	<button class="header-button-back"><-</button>
	<h1 class="header-pag-ename">${pageName}</h1>
	<h2 class="header-subtitle">DUCK HUNT</h2>
</header>;
`;
};
