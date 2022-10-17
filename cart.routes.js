const express = require('express');
const cart_routes = express.Router();


const {getcart, displaycart, postcart, updatecart, deletecart} = require('../controller/cart')


cart_routes.get('/displaycartitem', getcart)
cart_routes.get('/displaycartitem/:customerid', displaycart)
cart_routes.post('/addtocartitem', postcart)
cart_routes.put('/updatetocartitem/:customerid', updatecart)
cart_routes.delete('/deletecartitem/:customerid', deletecart)



module.exports = {cart_routes}



