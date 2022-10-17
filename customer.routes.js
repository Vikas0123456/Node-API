const express = require("express");
const customer_router = express.Router();

const {getcustomer,displaycustomer,registercustomer,updatecustomer,deletecustomer} = require('../controller/customer')


customer_router.get('/displaycustomer', getcustomer)
customer_router.get('/displaycustomer/:customerid', displaycustomer)
customer_router.post('/registercustomer', registercustomer)
customer_router.put('/updatecustomer/:customerid', updatecustomer)
customer_router.delete('/deletecustomer/:customerid', deletecustomer)


module.exports = {customer_router}