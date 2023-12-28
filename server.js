const express = require('express');
const cors = require('cors');
const studentRouter = require('./src/controllers/students');
const mentorRouter = require('./src/controllers/mentor');
const assignRouter = require('./src/controllers/assignstudent');
const changeMentorRouter = require('./src/controllers/changementor');
const dashboardRouter = require('./src/controllers/dashboard');
const app = express() ;



// middlewares 

app.use(express.json());
app.use(cors());

app.get('/',dashboardRouter)
app.use('/students',studentRouter);
app.use('/mentors',mentorRouter);
app.use('/assign',assignRouter) ;
app.use('/change',changeMentorRouter);



module.exports = app ;