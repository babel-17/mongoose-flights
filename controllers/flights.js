const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,

};

function newFlight(req, res) {
    res.render('flights/new', errorMsg: ''} );
}

async function create(req, res) {
// req.body.airport = req.body.airport.trim();
// req.body.airline = req.body.airline.trim();
console.log('req.body', req.body);
try {
    await Flight.create(req.body);
    //always redirect after CUDing data
    // refactor to redirect after we implement it
    res.redirect('/flights/new');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {title: 'Add Flight', errorMsg: err.message});
    }
}