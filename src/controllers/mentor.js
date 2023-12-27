const mentorRouter = require('express').Router();
const Mentor = require('../models/mentor');

// endpoint to view all mentors

mentorRouter.get('/',(request,response)=>{
    Mentor.find({},{})
        .then(students => {
            response.status(200).json(students);
        })
})

// endpoint to create a new mentor 

mentorRouter.post('/create',(request,response)=>{
    const mentor = new Mentor(request.body);
    if (mentor.email) {
        mentor.save()
        .then(()=>{
            response.status(200).json({message : 'mentor created successfully'});
        })
    } else {
        response.status(400).json({ message : "entered details does not valid"});
    }
    

})

// endpooint to view a single mentor 

mentorRouter.get(`/:id`,(request,response)=>{
    let id = request.params.id ;

    Mentor.findById(id) 
        .then(mentor=> {
            response.status(200).json( mentor );
        })
        .catch(error => {
            console.log(error);
        })
})

// endpoint to view all students in a particular mentor

mentorRouter.get('/:id/students',(request,response)=>{
    const id = request.params.id;
    Mentor.findById(id)
        .then(menties =>{
            response.status(200).json(menties.students);
        })

})


module.exports = mentorRouter ;