const express = require('express');
const cors = require('cors');
const studentRouter = require('./src/controllers/students');
const mentorRouter = require('./src/controllers/mentor');
const assignRouter = require('./src/controllers/assignstudent');
const changeMentorRouter = require('./src/controllers/changementor');
const app = express() ;



// middlewares 

app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>{
    response.status(200).send('<h1> welcome </h1>')
})
app.use('/students',studentRouter);
app.use('/mentors',mentorRouter);
app.use('/assign',assignRouter) ;
app.use('/change',changeMentorRouter);



module.exports = app ;