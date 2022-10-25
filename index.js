
const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send("API Running");
})

app.listen(port, ()=>{
    console.log('IT-skills-for-all server is running on port', port)
})