import jwt, { decode } from 'jsonwebtoken';

export default (req,res,next) => {
     const token = req.headers.authorization;
     jwt.verify(token, process.env.JWT_SECRET, function(err,decoded){
         if(err){
             return res.status(403).json({message: err.message})
         }

         req.user = decoded;
         return next;
     })
}