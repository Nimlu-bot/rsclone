const EN = {
    Login: "Login",
    eMail: "e-mail",
    password: "Password",
    passwordLength: "*must be at least 6 characters",
    signUp: "Sign Up",
    serverError: "Server access error",
    unknowError: "Unknow Error",
    invalidEmail: "Invalid e-mail",
    IncorrectEmail: "Incorrect email",
    MinimumPasswordLength6Characters: "Minimum password length 6 characters",
    IncorrectRegistrationData: "Incorrect registration data",
    ThisUserAlreadyExists: "This user already exists",
    UserCreated: "User created",
    SomethingWentWrongTryAgain: "Something went wrong, try again",
    PleaseEnterAValidEmail: "Please enter a valid email",
    EnterPassword: "Enter password",
    InvalidLoginData: "Invalid login data",
    UserIsNotFound: "User is not found",
    InvalidPasswordTryAgain: "Invalid password, try again",
    NoAuthorization: "No authorization",
    time: "Time",
    name: "Name",
    ducks: "Ducks",
    hits: "Shots",
    persent: "Persent",
    score: "Score",
		statisticsTable: "Statistics table",
		gameMenu:"Game menu",
		pause:"pause",
		continue:"continue",
		level:"level",
		start:"Start",
		levels:"Levels",
		settings:"Settings",
		statistic:"Statistic",
		lvl:"lvl",
		back:"back",
		badHuntDude:"Bad hunt Dude!",
		awesomeHunter:"Awesome hunter",
		detecting:"Detecting...",
		ducksAreDetected:"Ducks are detected! Click here..."



};
const RU = {
    Login: "Вход",
    eMail: "e-mail",
    password: "Пароль",
    passwordLength: "*должен быть не менее 6 символов",
    signUp: "Рег.",
    serverError: "Ошибка доступа к серверу",
    unknowError: "Неизвестная ошибка",
    invalidEmail: "Неверный e-mail",
    IncorrectEmail: "Некорректный email",
    MinimumPasswordLength6Characters: "Минимальная длина пароля 6 символов",
    IncorrectRegistrationData: "Некорректные данные при регистрации",
    ThisUserAlreadyExists: "Такой пользователь уже существует",
    UserCreated: "Пользователь создан",
    SomethingWentWrongTryAgain: "Что-то пошло не так, попробуйте снова",
    PleaseEnterAValidEmail: "Введите корректный email",
    EnterPassword: "Введите пароль",
    InvalidLoginData: "Некорректный данные при входе в систему",
    UserIsNotFound: "Пользователь не найден",
    InvalidPasswordTryAgain: "Неверный пароль, попробуйте снова",
    NoAuthorization: "Не авторизован",
    time: "Время",
    name: "Имя",
    ducks: "Уток",
    hits: "Попаданий",
    persent: "Процент",
    score: "Очки",
		statisticsTable: "Таблица статистики",
		gameMenu:"Игровое меню",
		pause:"пауза",
		continue:"продолжить",
		level:"уровень",
		start:"Старт",
		levels:"Уровни",
		settings:"Настройки",
		statistic:"Статистика",
		lvl:"Ур.",
		back:"назад",
		badHuntDude:"Плохая охота, чувак!",
		awesomeHunter:"Замечательный охотник",
		detecting:"Обнаружение ...",
		ducksAreDetected:"Утки обнаружены! Нажмите здесь ..."
};

const BY = {
    Login: "Уваход",
    eMail: "e-mail",
    password: "Пароль",
    passwordLength: "*павінен быць не менш за 6 сімвалаў",
    signUp: "Рэгістрацыя",
    serverError: "Памылка доступу да сервера",
    unknowError: "Невядомая памылка",
    invalidEmail: "Няправільны e-mail",
    IncorrectEmail: "Некарэктны email",
    MinimumPasswordLength6Characters: "Мінімальная даўжыня пароля 6 сімвалаў",
    IncorrectRegistrationData: "Некарэктныя дадзеныя пры рэгістрацыі",
    ThisUserAlreadyExists: "Такі карыстач ужо існуе",
    UserCreated: "Карыстач створаны",
    SomethingWentWrongTryAgain: "Нешта пайшло не так, паспрабуйце зноў",
    PleaseEnterAValidEmail: "Увядзіце карэктны email",
    EnterPassword: "Увядзіце пароль",
    InvalidLoginData: "Некарэктны дадзеныя пры ўваходзе ў сістэму",
    UserIsNotFound: "Карыстач не знойдзены",
    InvalidPasswordTryAgain: "Няправільны пароль, паспрабуйце зноў",
    NoAuthorization: "Не аўтарызаваны",
    time: "Час",
    name: "Імя",
    ducks: "Качак",
    hits: "Трапленняў",
    persent: "Адсоткаў",
    score: "Ачкі",
		statisticsTable: "Табліца статыстыкі",
		gameMenu:"Гульнёвае меню",
		pause:"паўза",
		continue:"працягваць",
		level:"узровень",
		start:"Старт",
		levels:"Узроўні",
		settings:"Настройкі",
		statistic:"Статыстыка",
		lvl:"узр.",
		back:"назад",
		badHuntDude:"Кепскае паляванне, чувак!",
		awesomeHunter:"Выдатны паляўнічы",
		detecting:"Выяўленне ...",
		ducksAreDetected:"Качкі выяўленыя! Націсніце тут ..."
};

export const lang = {
    EN,
    RU,
    BY
};

let currentLang = "BY";
export function getLang() {
    return currentLang;
}
export function setLang(l) {
    currentLang = l;
}
