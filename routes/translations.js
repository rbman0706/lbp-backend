const router = require('express').Router();
const ctrl = require('../controllers');

// routes

router.post('/', ctrl.translations.create);
router.get('/history', ctrl.translations.index);
router.get('/:id', ctrl.translations.show);


// exports
module.exports = router;