const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json')

app.get('/',(req, res)=>{
    res.send("API Running");
})

app.get('/courses-name',(req, res)=>{
    res.send(courses)
})

app.get('/course-details/:id',(req, res)=>{
    const id = req.params.id;
    const courseDetails = courses.find(c=> c.id == id);
    console.log(courseDetails);
    res.send(courseDetails);
})

app.get('/checkout/:id',(req, res)=>{
    const id = req.params.id;
    const courseCheckOut = courses.find(c=> c.id == id);
    res.send(courseCheckOut);
})

app.listen(port, ()=>{
    console.log('IT-skills-for-all server is running on port', port)
})