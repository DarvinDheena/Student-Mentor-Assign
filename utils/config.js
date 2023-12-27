require('dotenv').config() ;

const PORT = process.env.PORT ;
const HOSTNAME = process.env.HOSTNAME ;
const MONGODB_URI = process.env.MONGODB_URI ;
module.exports = {
    PORT ,
    HOSTNAME ,
    MONGODB_URI
}