const router = require("express").Router();
const { getUser ,addUser} = require('../controller/user')

router.get("/user_list",(req,res) => {
    getUser(req,res) 
})

router.post('/add_user',(req,res)=>{
    addUser(req,res)
})

module.exports = router;