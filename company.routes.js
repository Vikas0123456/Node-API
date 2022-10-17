const express = require('express');
const company_router = express.Router();

const {getcompany , addcompany, updatecompany, deletecompany} = require('../controller/company')


company_router.get('/displaycompany', getcompany)
company_router.post('/addcompany', addcompany)
company_router.put('/updatecompany/:companyid', updatecompany)
company_router.delete('/deletecompany/:companyid', deletecompany)




module.exports = {company_router};