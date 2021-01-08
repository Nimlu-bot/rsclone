const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'IncorrectEmail').isEmail(), // Некорректный email
        check('password', 'MinimumPasswordLength6Characters').isLength({
            // Минимальная длина пароля 6 символов
            min: 6
        })
    ],
    // eslint-disable-next-line consistent-return
    async (req, res) => {
        // res.set("Access-Control-Allow-Origin", "*");
        try {
            console.log(req.body);
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(401).json({
                    errors: errors.array(),
                    message: 'IncorrectRegistrationData' // Некорректные данные при регистрации
                });
            }

            const { email, password } = req.body;

            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(401).json({ message: 'ThisUserAlreadyExists' }); // Такой пользователь уже существует
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });

            await user.save();

            res.status(201).json({ message: 'UserCreated' }); // Пользователь создан
        } catch (e) {
            res.status(500).json({ message: 'SomethingWentWrongTryAgain' }); // Что-то пошло не так, попробуйте снова
        }
    }
);

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'PleaseEnterAValidEmail').normalizeEmail().isEmail(), // Введите корректный email
        check('password', 'enterPassword').exists() // Введите пароль
    ],
    // eslint-disable-next-line consistent-return
    async (req, res) => {
        try {
            console.log(req.body);
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(401).json({
                    errors: errors.array(),
                    message: 'InvalidLoginData' // Некорректный данные при входе в систему
                });
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({ message: 'UserIsNotFound' }); // Пользователь не найден
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'InvalidPasswordTryAgain' }); // Неверный пароль, попробуйте снова
            }

            const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
                expiresIn: '1h'
            });

            res.json({ token, userId: user.id });
        } catch (e) {
            res.status(500).json({ message: 'SomethingWentWrongTryAgain' }); // Что-то пошло не так, попробуйте снова
        }
    }
);

module.exports = router;
