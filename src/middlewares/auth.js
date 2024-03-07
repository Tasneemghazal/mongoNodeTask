import jwt from 'jsonwebtoken'
const auth = (req,res,next)=>{
    const {authorization}= req.headers;
    if(!authorization.startsWith(process.env.BEARERTOKEN)){
        return res.json({message:"not auth user"})
    }
    const token = authorization.split(process.env.BEARERTOKEN)[1];
    if(!token){
    return res.json({message:" token not found"});
    }
    const decode = jwt.verify(token,process.env.LOGINTOKEN)
    req.userId =decode.id;
    next();
}
 export default auth;