// const { con } = require('../modal/config')
const con = require('../modal/config')

let getcategory = async (req, res) => {
    try {
        const q1 = "SELECT * FROM productcategory"
       await con.query(q1, (err, result, fields) => {
            if(err) {
                res.send(err.sqlMessage);
            }res.send(result);
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let postcategory = async (req, res) => {
    try{
        const q1 = "INSERT INTO productcategory SET ?"
    const data = req.body;
   await con.query(q1, data, (err, result, fields) => {
        if(err){
            res.send(err.sqlMessage);
        }res.send(result);
    }) 
}catch(err){
    res.send(err.sqlMessage);
}
}

let updatecategory = async (req, res) => {
       try{
        const data = [req.body, req.params.cid];
    const q1 = " UPDATE productcategory SET ? WHERE cid = ?"
    await con.query(q1, data, (err, result, fields) => {
        if(err){
            res.send(err.sqlMessage);
        }res.send(result);
    })
       }catch(err){
        res.send(err.sqlMessage);
       }
}

let deletecategory = async (req, res) => {
        try{
            const data = req.params.cid;
            const q1 = " DELETE FROM productcategory WHERE cid = ?"
           await con.query(q1, data, (err, result, fields) => {
                if(err){
                    res.send(err.sqlMessage);
                }res.send(result);
            })
        }catch(err){
            res.send(err.sqlMessage);
        }
}

module.exports = {getcategory, postcategory, updatecategory, deletecategory}