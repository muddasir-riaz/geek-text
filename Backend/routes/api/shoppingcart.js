const router = require('express').Router();
let ShoppingCart = require('../../models/shoppingcart.model');

router.route('/getcart').get((req, res)=>{
    ShoppingCart.find()
    .then(title => res.json(title))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addcart').post((req, res) =>{
    const title = req.body.title;

    const newShoppingCart = new ShoppingCart({title});
    newShoppingCart.save()
    .then(()=> res.json('Book Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
});

router.route('/delete').delete((req, res)=>{
    const title = req.body.title;

    const newShoppingCart = new ShoppingCart({title});
    newShoppingCart.save()
    .then(()=> res.json('Book Added'))
    .catch(err =>res.status(400).json('Error: '+ err));
});


module.exports = router