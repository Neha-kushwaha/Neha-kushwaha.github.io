const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//for serving static files
app.get('/static', express.static('static'));

//set the template engine as pug
app.set('view engine','pug');

//set the views directory 
app.set('views', path.join(__dirname, 'views'));
 

app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Heyyy Neha', message:'Hello there and thanks for telling me how to use PUG!'});
});

app.get("/", (req, res)=>{
    res. status(200).send("This is my home page of my first express app with harry");
});

app.get("/about", (req, res)=>{
    res.send("This is my about page of my first express app with harry");
});

app.post("/about", (req, res)=>{
    res.send("This is  a post request  about page of my first express app with harry");
});


app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
