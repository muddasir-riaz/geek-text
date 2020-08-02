
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
Book.find({isbn:req.params.bookISBN} , function(err, book){
  if (err) res.status(404).json({ msg: 'Book unavailable' })
  else {
    Cart.findOneAndUpdate(req.params.cartID , { 
      $inc: { quantity: 1 },
      $push: {
        'items':  {
          book
        }
    }, 
  
  })
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json({ msg: 'Book unavailable' }));             
  }
});

});



router.delete('/deleteBook' , (req, res) => {
Book.find({isbn:req.params.bookISBN} , function(err, book){
  if (err) res.status(404).json({ msg: 'Book unavailable' })
  else {
    Cart.findOneAndDelete(req.params.cartID , { 
      $pull: {
        'items':  {
          book
        }
    }, 
  
  })
  
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json({ msg: 'Book unavailable' }));             
  }
});
})


router.get('/getcart' , (req, res) => {
  Cart.find()
      .sort({ date: -1})
      .then(carts => res.json(carts))
})


module.exports = router;

