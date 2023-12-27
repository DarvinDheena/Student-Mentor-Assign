const mongoose = require('mongoose');


   // to create a schema 
   
   const studentSchema = new mongoose.Schema({
        name : { 
            type : String ,
             require : [ true , "name does not exist"]
        }  ,
        email : { 
            type : String , 
            require : [ true , "name does not exist"]
        } ,
        mentor :  { 
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Mentor' 
        },
        previusMentor : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Student'
        }
        ]
    
    })
    
    // to create a Note Model 
    
    module.exports =   mongoose.model('Student',studentSchema,'students');