const {getUserList,addUser} = require('../model/user')

module.exports = {
    getUser : async(req,res) =>{
        await getUserList((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    addUser:async(req,res) =>{
        const body = req.body
        await addUser(body,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err.sqlMessage
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        }) 
    }
}