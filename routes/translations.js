const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.games.index);
router.get('/:id', ctrl.games.show);


// exports
module.exports = router;