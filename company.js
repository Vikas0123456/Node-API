const con = require('../modal/config')

let getcompany = async (req, res) => {
   try{
   await con.query("SELECT * FROM company", (err, result, fields) => {
        if(err){
            res.send(err.sqlMessage);
        }res.send(result);
    })
   }catch(err){
    res.send(err.sqlMessage);
   }
}

let addcompany = async (req, res) => {
    try{

        await con.query("INSERT INTO company SET ?", req.body, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
       }
}

let updatecompany = async (req, res) => {
    try{
        const data = [req.body, req.params.companyid]
       await con.query("UPDATE company SET ? WHERE companyid =?",data, (err, result , fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let deletecompany = async (req, res) => {
    try{
        const data = req.params.companyid;
        const q1 = "DELETE FROM company WHERE companyid =?"
       await con.query(q1,data, (err, result, fields) => {
            if(err){
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}





module.exports = {getcompany, addcompany, updatecompany, deletecompany};