const express = require('express');
const routes = require('./routes/01-index');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const isAuthorized = require('./utils/auth');
const MongoStore = require('connect-mongo');
const { MONGODB_URI, SECRET_DISCORD_SESSION  } = require('./config');

const app = express();

//settings
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(session({
    secret: SECRET_DISCORD_SESSION,
    name:'luchocookie',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: MONGODB_URI
    }),
    cookie: {
        maxAge: 60000 * 60 * 24, //this is aprox one day

    }     
}));

app.use(passport.initialize());
app.use(passport.session());

require('./strategies/discordStrategy');

//global variables
app.use((req, res, next)=>{
    app.locals.user = req.user;
    next();
})

//routes
app.use('/auth', routes.auth );
app.use('/dashboard',isAuthorized, routes.dashboard );
app.use('/', routes.home );


module.exports = app;