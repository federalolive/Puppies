var express = require('express');
var router = express.Router();
const puppiesCtrl = require('../controllers/api/puppies')

router.get('/puppies', puppiesCtrl.index)
router.get('/puppies/:id', puppiesCtrl.show)
router.post('/puppies', puppiesCtrl.create)
router.put('/puppies/:id', puppiesCtrl.update)
router.delete('/puppies/:id', puppiesCtrl.delete)

module.exports = router;