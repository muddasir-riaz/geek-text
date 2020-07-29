
const router = require('express').Router();
let Author = require('../../models/author.model');

router.route('/').get((req, res) => {
    Author.find()
    .then(author => res.json(author))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const authorFirst = req.body.authorFirst;
    const authorLast = req.body.authorLast;
    const biography = req.body.biography;
    const publisher = req.body.publisher;
    
    const newAuthor = new Author({
      authorFirst,
      authorLast,
      biography,
      publisher,
    });
  
    newAuthor.save()
    .then(() => res.json('Author added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  
  module.exports = router;


