import "./login.component.scss";

export const loginTemplate = (language) => {
    return `
		<div class = "login-wrapper">
		<input class = "login-email" placeholder="e-mail" required type="email">
		<input class = "login-password" placeholder="password" required type="password">
		<div class = "login-buttons-wrapper">
		<button class = "login-button login">Log in${language}</button>
		<button class = "login-button signup">Sign up</button>
		</div>
		</div>
`;
};
