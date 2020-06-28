const router = require('express').Router();
const game = require('./game');

router.get('/', (req, res) => res.status(200).json({ msg: 'Hi from Api!' }));
router.use('/game', game);

module.exports = router;
