// jshint esversion:6

// Packages
const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


const port = 3000;
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname , "public")));
// redundant lines
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("js", express.static(__dirname + "public/js"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

// Handling Post
app.post("/", function(req,res){
  console.log("Post request received");
  const apiUrl = "https://data.covid19india.org/data.json";
  // const apiUrl = 'https://api.covid19india.org/';
  // responding to post rrequest with data from api by making a get request
  https.get(apiUrl, function(response){
    console.log("Satus code (api): ", res.statusCode);
    // console.log("Headers: ", res.headers);

    // parsing the data
    response.on("data", function(data){
      // data in its raw form
      console.log(data);
      process.stdout.write(data);
      var covidDataStr = [data];
      console.log(JSON.parse(covidDataStr));
      // data in its processed form
      // const covidData = JSON.parse(data);
      // console.log(data);
      res.write(data);
    });
  });
});
// Static Files

app.listen(port, function(){
  console.info(`Server started on port ${port}`);
});
