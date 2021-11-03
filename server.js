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
  const apiUrl = "https://disease.sh/v3/covid-19/gov/India?allowNull=Delhi";
  https.get(apiUrl, function(response){
    console.log("Satus code (api): ", res.statusCode);
    response.on("data", function(data){
      const testing = JSON.parse(data);
      console.log(testing);
    });
  });
});

app.listen(port, function(){
  console.info(`Server started on port ${port}`);
});
