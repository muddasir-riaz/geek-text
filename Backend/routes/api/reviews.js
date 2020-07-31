const router = require('express').Router();
let Review = require('../../models/review.model');
let Raiting = require('../../models/rating.model')
const { route } = require('./auth');

router.route('/').get((req, res)=>{
    Review.find({booktitle: req.body.booktitle}).sort({raiting: -1})
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/average').get((req, res)=>{
    Raiting.find({booktitle: req.body.booktitle})
    .then(reviews => {
        let average = 0;
        let count = 0
        reviews.forEach(function(r){
            average = average + r.raiting;
            count +=1;
        });
        res.json((average/count).toFixed(1));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addReview').post((req, res) => {
    const usernameAndTitle = req.body.username.concat("~",req.body.booktitle);
    const username = req.body.username;
    const booktitle = req.body.booktitle;
    const textBox = req.body.textBox;

    const newReview = new Review({usernameAndTitle, booktitle, username, textBox});
    newReview.save()
    .then(()=> res.json('Review Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
});

router.route('/addRating').post((req, res) => {
    const usernameAndTitle = req.body.username.concat("~",req.body.booktitle);
    const username = req.body.username;
    const booktitle = req.body.booktitle;
    const rating = req.body.raiting;

    const newRaiting = new Raiting({usernameAndTitle, booktitle, username, rating});
    newRaiting.save()
    .then(()=> res.json('Rating Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
});

module.exports = router