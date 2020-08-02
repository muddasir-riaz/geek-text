
const router = require('express').Router();


const Book = require('../../models/cartbook.model')
const Cart = require('../../models/cart.model')
const User = require('../../models/cartuser.model')


router.post('/create', (req, res) => {
  User.findById(req.params.id)  
  .then (Cart.create(req.params.id ,req.body))
    .then(() => res.json({
        msg: 'User now has a cart.'
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
