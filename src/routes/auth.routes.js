const { Router } = require('express');
const router = Router();
const passport = require('passport');
const alreadyAuthenticated = require('../utils/alreadyAuthenticated');
const isAuthorized = require('../utils/auth');

router.get('/login',alreadyAuthenticated, passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord',{
    successRedirect:'/dashboard',
    failureRedirect: '/'
}));

router.get('/logout',isAuthorized, (req, res)=>{

    if(req.user) req.logout((err)=>{
        if(err){ console.log(err) }
        res.redirect("/");
    });

    
});

module.exports = router;