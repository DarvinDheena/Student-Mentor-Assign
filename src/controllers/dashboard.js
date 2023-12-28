const dashboardRouter = require('express').Router();

dashboardRouter.get('/',(request,response)=>{
    const text = " "
    response.status(200).send('<h1>welcome</h1><h3>Path : "/students" </h3><p> Endpoint to view all students</p><h3>Path : "/mentors"</h3><p>Endpoint to get all mentors</p><h3>Path : "/assign/student/:studentId/mentor/:mentorId"  request : "post" </h3><p>assign a mentor to a student</p><h3>path : "/change/student/:studentId/mentor/:mentorId" request : "post"</h3><p>change a new mentor to a student </p><h3> path : "/students/create" request : "post"</h3><p> Endpoint to create a new student</p><h3>path : "/mentors/create" request : "post"</h3><p> Endpoint to create a new mentor</p><h3>path : "/students/:id/previousmentors"</h3><p>Endpoint to view previous mentors for a particular student</p><h3> Path : "/mentors/:id/students"</h3><p> Endpoint to view all mentiees for a particular mentor</p>')
})

module.exports = dashboardRouter 