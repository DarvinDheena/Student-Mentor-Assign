const changeMentorRouter = require('express').Router();
const Mentor = require('../models/mentor');
const Student = require('../models/Student');

// endpoint to change a mentor for a particular student
changeMentorRouter.post('/student/:studentId/mentor/:mentorId', async (request,response)=>{
    const { studentId , mentorId } = request.params ;

    // get student and mentor details
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);
    // first we have to assign the old mentor details in a previous mentor document 
    student.previusMentor = student.previusMentor.concat(student.mentor);

    // then we have to remove old mentor in the student collection and also update the new  mentor 
    student.mentor = mentor._id ;

    // now save the student in student collection in DB 
    await student.save();


    // now we have to add a student in a mentor collection 

    mentor.students = mentor.students.concat(student._id);
    // now save the mentor in mentor collection
    await mentor.save();

    response.status(200).json({
        message : "Mentor changed that particular student successfully"
    });
})

module.exports = changeMentorRouter 