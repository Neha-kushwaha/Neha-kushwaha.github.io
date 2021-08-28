const express = require("express");
const path = require("path");
const fs= require("fs");
const app = express();
const port = 80;

//Express specific stuff
app.use('/static', express.static('static'));  //for serving static files
app.use(express.urlencoded())

//pug specific stuff
app.set('view engine','pug');  //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));   //set the views directory 
 
//ENDPOINT
app.get('/',(req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'Pubg is the best game ', "content" : con}
    res.status(200).render('index.pug', params);
});

app.post('/',(req, res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite =`the name of the client is ${name}, ${age} year old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message': 'Your form has been submitted successfully '}
    res.status(200).render('index.pug', params);
});

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

