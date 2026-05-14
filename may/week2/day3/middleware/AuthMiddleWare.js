const  authentication=async (req,res,next)=>{
    try{
        console.log("authentication middleware")
        next()

    }catch(error){
        res.status(500).json({message:"failed in authentication", error: error.message})

    }
}
module.exports=authentication