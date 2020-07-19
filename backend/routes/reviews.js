const router = require('express').Router();
let Review = require('../models/review.model');

router.route('/').get((req, res)=>{
    Review.find({booktitle: req.body.booktitle}).sort({raiting: -1})
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/average').get((req, res)=>{
    Review.find({booktitle: req.body.booktitle})
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
router.route('/add').post((req, res) => {
    const usernameAndTitle = req.body.username.concat("specialUnion",req.body.booktitle);
    const username = req.body.username;
    const booktitle = req.body.booktitle;
    const raiting = req.body.raiting;
    const textBox = req.body.textBox;

    const newReview = new Review({usernameAndTitle, booktitle, username, raiting, textBox});
    
    newReview.save()
    .then(()=> res.json('Review Added'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router
