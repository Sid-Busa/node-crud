const pool = require("../config/db_connection");

module.exports ={
    getUserList :(callBack) =>{
        pool.query(
            `select * from user`,
            [],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
   
    addUser: (data, callBack) => {
        pool.query(
            `insert into user(name,email,mobile) 
            values(?,?,?)`,
            [
                data.name,
                data.email,
                data.mobile,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
}