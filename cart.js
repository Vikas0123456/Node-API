const con = require('../modal/config')


let getcart = async (req, res) => {
    try{
    await con.query("SELECT * FROM cart", (err, result, fields) => {
         if(err){
             res.send(err.sqlMessage);
         }res.send(result);
     })
    }catch(err){
     res.send(err.sqlMessage);
    }
 }
 

let displaycart = async (req, res) => {
   try{
   let data = req.params.customerid;
   await con.query("SELECT * FROM cart WHERE customerid = ?", data,(err, result, fields) => {
        if(err){
            res.send(err.sqlMessage);
        }res.send(result);
    })
   }catch(err){ 
    res.send(err.sqlMessage);
   }
}

let postcart = async (req, res) => {
    try{

        await con.query("INSERT INTO cart SET ?", req.body, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
       }
}

let updatecart = async (req, res) => {
    try{
        const data = [req.body, req.params.customerid]
       await con.query("UPDATE cart SET ? WHERE customerid =?",data, (err, result , fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let deletecart = async (req, res) => {  
    try{
        const data = req.params.customerid;
        const q1 = "DELETE FROM cart WHERE customerid =?"
       await con.query(q1,data, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}





module.exports = {getcart, displaycart, postcart, updatecart, deletecart};