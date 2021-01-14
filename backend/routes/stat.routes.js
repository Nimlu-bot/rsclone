const { Router } = require('express');
const { Stat } = require('../models/Stat');
const { auth } = require('../middleware/auth.middleware');

const router = Router();

router.post('/save', auth, async (req, res) => {
    try {
        const { time, ducks, hits, kills, score } = req.body;
        const stat = new Stat({
            time,
            ducks,
            hits,
            kills,
            score,
            owner: req.user.userId
        });
        await stat.save();
        res.status(201).json({ stat });
    } catch (e) {
        res.status(500).json({ message: 'SomethingWentWrongTryAgain' }); // Что-то пошло не так, попробуйте снова
    }
});
router.get('/', auth, async (req, res) => {
    try {
        const stat = await Stat.find({ owner: req.user.userId });
        res.json(stat);
    } catch (e) {
        res.status(500).json({ message: 'SomethingWentWrongTryAgain' }); // Что-то пошло не так, попробуйте снова
    }
});

module.exports = router;
