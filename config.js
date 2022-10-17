const mysql = require("mysql");


const con = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'amazon',
    port: 3306
})

con.connect((err) => {
    if(err){
        console.log(err.sqlMessage);
    }
    else{
        console.log('Connection established');
    }
})

module.exports =  con;