const jwt=require("jsonwebtoken")

const authMiddleware=(role)=>{
    return (req,res,next)=>{
        let decoded
        try {
            const token=req.headers?.authorization?.split(" ")[1]
            if(token){
                decoded=jwt.verify(token,'shhhhh')
            }else{
                return res.status(404).json({message:"Token not found"})
            }
        } catch (error) {
            if(error.message==="jwt expired"){
                let refreshToken=req.headers?.refreshToken?.split(" ")[1]
                let refreshDecoded=jwt.verify(refreshToken,'shhhhh')
                if(refreshDecoded){
                    let accessToken=jwt.sign({name:refreshDecoded.name,email:refreshDecoded.email,role:refreshDecoded.role,user_id:refreshDecoded.user_id},{expiresIn:60*15})
                    req.headers.authorization=`bearer ${accessToken}`
                    decoded=jwt.verify(accessToken,'shhhhh')
                }else{
                    return res.status(500).json({message:"Please login again"})
                }
            }else{
                res.status(500).json({message:"Something went wrong"})
            }
        }
            if(decoded){
                console.log(2)
                if(role.includes(decoded.role)){
                req.role=decoded.role
                req.user=decoded.user_id
                next()
                }else{
                    return res.status(401).json({message:"Unauthorized access"})
                }
            }else{
                res.status(401).json({message:"Please login again"})
            }
    }
}
module.exports=authMiddleware