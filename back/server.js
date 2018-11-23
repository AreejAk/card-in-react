const express = require('express')
const bodyParser = require("body-parser")
const mongodb = require('mongodb')
const port = 8001

var ObjectID = mongodb.ObjectID;

let db;

let title;
const mongoUrl =  'mongodb://AreejAk:123456789Areej@ds037067.mlab.com:37067/internproject'

mongodb.MongoClient.connect(mongoUrl, function (err, database) {//connection into Mongo DB
    if (err) {// incase there is an error show me the error
      console.log(err);
    } db = database.db("internproject");

    title = db.collection("title")// the table that collect all the object and give it to the task (and it contain all FUNCTIONS ex Update delete)

    console.log("Database connection ready");

    var server = app.listen(port, function () {
        console.log("App now running on port", port);
    });
})

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();//to allow the user to shift from one app to onther (to enter from the server to the title and vise versa)
});



app.post('/Add', (req, res) => {
    console.log(req.body);
    title.insertOne(req.body, function(err, result){
        if(err){
            console.log(err)
        }
        console.log(result)
    })
    // tasks.push(req.body)
  });

;




  app.post('/deletecard', (req, res) => { // we are taking from the front end and giving to back end(server)
    // console.log(req.body);
    title.remove( { _id: ObjectID(req.body._id) } )
    // tasks.pop(req.body)
  });



app.get("/internproject", function(req,res){//
    let tasks_title = title.find({}).toArray( (err, data) => {
        console.log(data)
        res.send(data)
    })
    
})

// app.titleen(port, function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log(`Server is running on port ${port}`)
// })