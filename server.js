// jshint esversion:6

// Packages
import fetch from "node-fetch";
import express from "express";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import exports from "exports";

// import {area,name} from "./foo.js";
// // import * as cheerio from "cheerio";
// // import * as chart from "chart.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Using exports

console.log(__dirname);
const port = 3000;
// console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname , "public")));
// // redundant lines
// app.use("/css", express.static(__dirname + "public/css"));
// app.use("/images", express.static(__dirname + "public/images"));


app.get("/", function(req,res){
  res.sendFile(__dirname+  "/index.html");

});


// Handling Post
app.post("/", function(req,res){
  console.log("Post request received");
  // const apiUrl = "https://disease.sh/v3/covid-19/gov/India?allowNull=Delhi";
  const apiUrl = "https://data.covid19india.org/data.json";
  fetch(apiUrl).then(res => res.json()).then(json => {
    console.log(json.cases_time_series[0].date);

  });
});
// This data will only be printed when we will be making a post request, i.e., pressing a button, but what we have to do is

app.listen(port, function(){
  console.info(`Server started on port ${port}`);
});

// export var name = "foobar";
// export const axe = (r) => r*r;

export var name1 = "Dome";
// const ranName = "Mike";
// module.exports = ranName; //This will be expected as a return value when i require the file
