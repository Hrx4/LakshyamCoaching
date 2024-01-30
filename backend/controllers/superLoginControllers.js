const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')


const superLogin = asyncHandler(async(req , res)=>{
    const {userName , password} = req.body;
    if(userName!== "usename" && password!=="password") return res.status(400).json({message:"Invalid User"})
    // const token = jwt.sign({useName : userName , password:password} , process.env.JWT_SECRET)
    res.status(201).json({useName : userName 
        // , token:token
    })
})


module.exports = {superLogin}