const { createPool } = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password:"",
    database: "user",
})

pool.getConnection(function(err,connection) {
    if (err) {
        return console.log(err)
    }else{
        console.log("Connected!");
    } 
  });   
module.exports = pool  