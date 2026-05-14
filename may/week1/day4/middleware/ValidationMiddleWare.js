const  validation=async (req,res,next)=>{
    try{
        console.log("validation middleware")
        next()

    }catch(error){
        res.status(500).json({message:"failed in validation", error: error.message})

    }
}
module.exports=validation