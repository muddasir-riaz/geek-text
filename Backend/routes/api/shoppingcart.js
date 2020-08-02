
const router = require('express').Router();


const Book = require('../../models/cartbook')
const Cart = require('../../models/cart')
const User = require('../../models/cartuser')


router.post('/create', (req, res) => {
  User.findById(req.params.id)  
  .then (Cart.create(req.params.id ,req.body))
    .then(() => res.json({
        msg: 'Success! Created cart for user!'
    }))
  .catch (err => res.json({
      msg: err.message,
  }))
});



router.post('/addBook', (req, res) => {
    User.findById(req.params.id)
    .then(Book.find({isbn:req.params.isbn})
      .then())
  
  });
  
  

  router.delete('/deleteBook' , (req, res) => {
    User.findById(req.params.id)
    .then(Book.find({isbn:req.params.isbn})
      .then())
    
    
    
    
   
  })

router.get('/getcart' , (req, res) => {
  Cart.find()
      .sort({ date: -1})
      .then(carts => res.json(carts))
})


module.exports = router;
