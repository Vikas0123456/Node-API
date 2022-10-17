const con = require("../modal/config");

let getproduct1 = async (req,res)=>{
    try{
      await con.query("SELECT * FROM product", (err,result,fields)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let getproduct2 = async (req,res)=>{
    try{
        const data = req.params.pid;
      await con.query("SELECT * FROM product WHERE pid = ?", data, (err,result,fields)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let getproduct3 = async (req,res)=>{
    try{
        const data = req.params.cid;
      await con.query("SELECT * FROM product WHERE cid = ?", data, (err,result, fields)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let getproduct4 = async (req,res)=>{
    try{
        const data = req.params.companyid;
      await con.query("SELECT * FROM product WHERE companyid = ?", data, (err,result, fields)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}


let postproduct = async (req,res)=>{
    try{
       data = req.body;
       q1 = "INSERT INTO product SET ?"
       con.query(q1,data,(err,result,fields)=>{
        if(err){
            res.send(err.sqlMessage)
        }res.send(result)
       })
    }catch(err){
        res.send(err.sqlMessage)
    }
}

let putproduct = async (req,res) => {
    try {
        data = [req.body, req.params.pid]
        q2 = "UPDATE product SET ? WHERE pid = ?"
        con.query(q2,data,(err,result)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage)
    }
}

let deleteproduct = async (req,res) => {
    try{
        data = req.params.pid;
        q3 = "DELETE FROM product WHERE pid = ?"
        con.query(q3,data,(err,result)=>{
            if(err){
                res.send(err.sqlMessage)
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage)
    }  
}

module.exports = {getproduct1, getproduct2, getproduct3, getproduct4, postproduct, putproduct, deleteproduct};