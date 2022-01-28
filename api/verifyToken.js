const jwt = require("jsonwebtoken");

const verify = (req,res,next)=>{
    const authHeader = req.headers.token;
    // console.log(authHeader)
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      console.log(token)
      if(token === "" || token === undefined){
        console.log("no token")
      } else{
        jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, user) => {
          if (err) res.status(403).json("Token is not valid!");
          req.user = user;
          console.log(req.user)
          next();
        });
      }
      
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  
    
}


module.exports = verify;