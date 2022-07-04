const { connect } = require('mongoose');
const { MONGODB_URI } = require('./config');

connect(MONGODB_URI,{
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
  })
  .then( console.log('mongoDB Connected'))
  .catch(err => console.log(err.reason));;
