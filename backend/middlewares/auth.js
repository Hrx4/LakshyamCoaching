const jwt = require('jsonwebtoken')

const auth = ((req , res , next)=>{
    try{
        let token = req.headers.authorization;
    if(token) {
        token = token.split(" ")[1]
     jwt.verify(token , process.env.JWT_SECRET)   
    }
    else{
        return res.status(401).json({message:"Unauthorized user"})
    }
    next()
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized user"})
    }
})
 
module.exports = {auth}