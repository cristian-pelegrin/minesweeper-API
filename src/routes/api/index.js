const router = require('express').Router();

router.get('/', (req, res) => res.status(200).json({ msg: 'Hi from Api!' }));

module.exports = router;
