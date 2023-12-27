const assignRouter = require('express').Router() ;
const Student = require('../models/Student');
const Mentor = require('../models/mentor');


// endpoint to assign a student for a particular mentor
assignRouter.post('/student/:studentId/mentor/:mentorId', async (request,response)=>{
        const { studentId , mentorId } = request.params ;

        // get the student and mentor details from the database
        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        // adding student details in a mentor  collection 
        mentor.students = mentor.students.concat(student._id);
        await mentor.save();

        // adding mentor details and previous mentor details in a student collection
        student.mentor = mentor._id;
        await student.save();

        response.status(200).json({ message : `Student ${studentId} assigned to a mentor ${mentorId}`});
    
})


module.exports = assignRouter ;