const studentRouter = require('express').Router();

const Student = require('../models/Student');


// endpoint to view all students 

studentRouter.get('/',(request,response)=>{
    Student.find({},{})
        .then(students => {
            response.status(200).json(students);
        })
})
// endpoint to create a student 

studentRouter.post('/create',(request,response)=>{
    const student = new Student(request.body);
    if (student.email) {
        student.save()
        .then(()=>{
            response.status(200).json({message : 'student created succssfully'});
        })
    } else {
        response.status(400).json({message : 'entered details does not valid'})   
    }
})

// endpoint to delete a student

studentRouter.delete('/:id',(request,response)=>{
    const id = request.params.id ;
    Student.findByIdAndDelete(id)
        .then(deleteStudent =>{
            if (deleteStudent){
                response.status(200).json({ message : 'id deleted'})
            }
        })
})

// endpoint to view all previously add mentors for a particular students

studentRouter.get('/:id/previusmentors', async (request,response) => {
    const id = request.params.id ;
    console.log(id);
    await Student.findById(id)
        .then(student => {
            response.status(200).json(student.previusMentor);
        })
})


module.exports = studentRouter ;