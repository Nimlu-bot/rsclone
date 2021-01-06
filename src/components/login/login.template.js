import './login.component.scss';
import { lang } from '../../core/index';

export const loginTemplate = (language) => {
    return `
		<div class = "login-wrapper">
		<input class = "login-email" placeholder="${lang[language].eMail}" type="email" name="email" required >
		<input class = "login-password" placeholder="${lang[language].password}" type="password" required >
		<span class ="login-password-length">${lang[language].passwordLength}</span>
		<div class = "login-buttons-wrapper">
		<button class = "login-button login">${lang[language].Login}</button>
		<button class = "login-button signup">${lang[language].signUp}</button>
		</div>
		<div class="login-message"></div>
		</div>
`;
};
