const con = require('../modal/config')

let getcustomer =  async (req, res) => {
    try{
        const q1 = "SELECT * FROM customer";
       await con.query(q1, (err, result, fields) => {
           if(err){
            res.send(err.sqlMessage);
           }res.send(result);
    })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let displaycustomer =  async (req, res) => {
    try{
        const data = req.params.customerid;
        const q1 = "SELECT * FROM customer WHERE customerid = ?";
       await con.query(q1, data, (err, result,fields) => {
           if(err){
            res.send(err.sqlMessage);
           }res.send(result);
    })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let registercustomer = async (req, res) => {
   try{ const data = req.body;
    const q1 = "INSERT INTO customer SET ?"
   await con.query(q1, data, (err, result, fields) => {
        if(err){
            res.send(err.sqlMessage);
        }res.send(result);
    })
}catch(err){
    res.send(err.sqlMessage);
}
}

let updatecustomer = async (req, res) => {
    try{
        const data = [req.body, req.params.customerid]
        const q1 = "UPDATE customer SET ? WHERE customerid = ?"
      await  con.query(q1, data, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let deletecustomer = async (req, res) => {
    try{
        const data = req.params.customerid;
        const q1 = " DELETE FROM customer WHERE customerid = ?"
       await con.query(q1, data, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}


module.exports = {getcustomer,displaycustomer,registercustomer,updatecustomer,deletecustomer}
