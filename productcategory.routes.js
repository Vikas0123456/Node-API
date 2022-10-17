const express = require('express');
const productcategory_routes = express.Router();


const {getcategory, postcategory, updatecategory, deletecategory} = require('../controller/productcategory')


productcategory_routes.get('/displaycategory', getcategory)
productcategory_routes.post('/createcategory', postcategory)
productcategory_routes.put('/updatecategory/:cid', updatecategory)
productcategory_routes.delete('/deletecategory/:cid', deletecategory)



module.exports = {productcategory_routes}