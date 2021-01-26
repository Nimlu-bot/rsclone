const { Router } = require("express");
const Stat = require("../models/Stat");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

const router = Router();

router.post("/save", auth, async (req, res) => {
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
        res.status(500).json({ message: "SomethingWentWrongTryAgain" }); // Что-то пошло не так, попробуйте снова
    }
});
router.get("/", auth, async (req, res) => {
    try {
        const stat = await Stat.find({ owner: req.user.userId });
        res.json(stat);
    } catch (e) {
        res.status(500).json({ message: "SomethingWentWrongTryAgain" }); // Что-то пошло не так, попробуйте снова
    }
});
router.get("/all", async (req, res) => {
    try {
        const users = await User.find({}, { email: 1 });
        const rez = new Array(users.length);
        for (let i = 0; i < users.length; i += 1) {
            users[i].stats = await Stat.find({ owner: users[i]._id }, { owner: 0, _id: 0, __v: 0 });
        }

        for (let i = 0; i < users.length; i += 1) {
            users[i]._id = null;
        }
        res.json(users);
    } catch (e) {
        res.status(500).json({ message: "SomethingWentWrongTryAgain" }); // Что-то пошло не так, попробуйте снова
    }
});
module.exports = router;
