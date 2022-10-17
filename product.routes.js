const express = require("express")

const product_routes = express.Router();

const {getproduct1, getproduct2, getproduct3, getproduct4, postproduct, putproduct, deleteproduct} = require("../controller/product")

product_routes.get('/product', getproduct1);
product_routes.get('/product/:pid', getproduct2);
product_routes.get('/product/:cid', getproduct3);
product_routes.get('/product/:companyid', getproduct4);
product_routes.post('/postproduct', postproduct);
product_routes.put('/updateproduct/:pid', putproduct);
product_routes.delete('/deleteproduct/:pid', deleteproduct);

module.exports = {product_routes};