const router = require('express').Router();
let Information = require('../../models/book.model');

router.route('/').get((req, res) => {
    Information.find()
        .then(booksorting => res.json(booksorting))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/genre').get((req, res) => {
    Information.find({genre: req.body.genre}).sort({genre: 1})
    .then(booksorting => res.json(booksorting))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rating').get((req, res) => {
    Information.find({rating: req.body.rating}).sort({rating: -1})
    .then(booksorting => res.json(booksorting))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/copiessold').get((req, res) => {
    Information.find().sort({copiesSold: -1}).limit(10)
    .then(booksorting => res.json(booksorting))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/integer').get((req, res) => {
    Information.find().limit(req.body.x)
    .then(booksorting => res.json(booksorting))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;