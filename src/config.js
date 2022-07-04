require('dotenv').config();


module.exports = {
    PORT: 3000,
    MONGODB_URI:`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qj8fv.mongodb.net/oauth`,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    SECRET_DISCORD_SESSION: process.env.SECRET_DISCORD_SESSION
}