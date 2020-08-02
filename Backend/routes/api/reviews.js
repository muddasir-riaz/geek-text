const router = require('express').Router();
let Review = require('../../models/review.model');
let Rating = require('../../models/rating.model');
let Book = require('../../models/book.model');
//const { route } = require('./auth');

router.route('/').get((req, res)=>{
    Review.find({booktitle: req.body.booktitle}).sort({rating: -1})
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/average').get((req, res)=>{
    let this_title = req.body.booktitle;
    //Book.updateOne({isbn: 1234},{$set: {copiesSold: 2}}).then(()=> console.log("Successfull" + this_title + 2));
    Rating.find({booktitle: req.body.booktitle})
    .then(ratings => {
        let average = 0;
        let count = 0
        ratings.forEach(function(r){
            average = average + r.rating;
            count +=1;
        });
        Book.updateOne({title: this_title},{$set: {rating:(average/count).toFixed(1)}}).then(()=>console.log());
        res.json((average/count).toFixed(1));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addReview').post((req, res) => {
    const usernameAndTitle = req.body.username.toLowerCase().concat("~",req.body.booktitle);
    const username = req.body.username.toLowerCase();
    const booktitle = req.body.booktitle;
    const rating = req.body.rating;
    const textBox = req.body.textBox;

    const newReview = new Review({usernameAndTitle, booktitle, username, rating, textBox});
    Rating.deleteOne({usernameAndTitle: req.body.username.concat("~",req.body.booktitle)}).then(()=> console.log("Successfull"));
    newReview.save()
    .then(()=> res.json('Review Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
    
    const newRating = new Rating({usernameAndTitle, booktitle, username, rating});
    newRating.save();
});

router.route('/addRating').post((req, res) => {
    const usernameAndTitle = req.body.username.toLowerCase().concat("~",req.body.booktitle);
    const username = req.body.username.toLowerCase();
    const booktitle = req.body.booktitle;
    const rating = req.body.rating;

    const newRating = new Rating({usernameAndTitle, booktitle, username, rating});
    newRating.save()
    .then(()=> res.json('Rating Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
});

module.exports = router