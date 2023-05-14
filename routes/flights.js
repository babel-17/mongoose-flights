const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destination', flightsCtrl.createDestination);

// POST /flights
router.post('/', flightsCtrl.create);
// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete);

module.exports = router;