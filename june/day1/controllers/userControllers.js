exports.createUser=async(req,res)=>{
    try {
        console.log(req.body)
        res.send("now i am in controller");
    } catch (error) {
        
    }
};
