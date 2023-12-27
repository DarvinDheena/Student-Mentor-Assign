const app = require('./server');
const config = require('./utils/config')
const mongoose = require('mongoose');

// connect to mongodb

console.log('connecting to mongodb');

mongoose.connect('mongodb+srv://darvindheena98:darvin98@cluster0.triv4ws.mongodb.net/DAY37')
    .then(()=>{
        console.log('connected to mongodb');
        // lets listening to the server when database connected

        app.listen(config.PORT,()=>{
            console.log(`Server running on ${config.HOSTNAME} : ${config.PORT}`);
        })
    })
    .catch((error)=>{
        console.log('error connecting mongodb',error);
    })





