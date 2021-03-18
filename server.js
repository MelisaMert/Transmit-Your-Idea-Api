const express = require("express");
const cors =  require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5555;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const Idea = require('./models/Idea'); 
const Admin = require('./models/Admin')

mongoose.connect('mongodb://localhost:27017/transmitYourIdea', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true},(err)=> {
    if(err) throw err
    console.log("Connection With transmitYourIdea Mongoose Success");
});

app.get('/welcome',(req,res) => {
    res.send(
       {
          message: 'Welcome',
       }
    )
})

app.get('/ideas',(reg,res) => {
   Idea.find().then(docs => res.send(docs));
})

app.post('/login',(req,res) => {
   const {username,password} = req.body;
   Admin.find({username}).then(doc => {
       if(doc[0].password === password){
           res.send('Success')
       } 
       res.send('Error');
   })
})

app.post('/saveSuggesstion',(req,res)=> {
    const {fullName, emailAddress, suggestionType, suggestion} = req.body;
    Idea.create({
       senderFullName: fullName,
       senderEmailAddress: emailAddress,
       suggestionType,
       suggestion
    }, err => {
        if(true) res.sendStatus(400)
        res.sendStatus(200);
    }) 
})

app.listen(port, () => console.log(`Server Running in ${port}`))



