const express = require('express');
const app = express();
app.use(express.json());
const port = 6162;
// const con = require('./modal/config.js');



app.listen(port, (err) => {
   if(err){
    console.log(err.sqlMessage);
   }
   else{
    console.log(`server is running on ${port} port`)
   }
})




//////////company/////////////////////////////
const {company_router} = require("./routes/company.routes");
app.use('/', company_router)


/////////////////customer////////////////////
const {customer_router} = require("./routes/customer.routes");
app.use("/", customer_router);


///////////////productcategory////////////////
const{productcategory_routes} = require("./routes/productcategory.routes");
app.use("/", productcategory_routes);


/////////////////////cart////////////////////
const {cart_routes} = require("./routes/cart.routes");
app.use("/", cart_routes);


////////////////product/////////////////////
const {product_routes} = require("./routes/product.routes");
app.use("/", product_routes);









