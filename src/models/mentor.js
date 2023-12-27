const mongoose = require('mongoose');

// create a mentor schema 
const mentorShcema =new mongoose.Schema({
        name : { 
                type : String , 
                require : [ true , "name does not exist"]
        },
        email : { 
                type : String , 
                require : [ true , "name does not exist"]
        },
        students : [
                {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : 'Student'
                }
        ]
})


// create a model and export it 

module.exports = mongoose.model('Mentor',mentorShcema,'mentors');