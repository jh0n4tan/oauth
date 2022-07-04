const alreadyAuthenticated = (req,res,next)=>{
    if(req.user){
        res.redirect('/dashboard')
    }else{
        next()
    }
};

module.exports = alreadyAuthenticated;