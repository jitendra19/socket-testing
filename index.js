 const express = require("express");

 const app =  new express()

 app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/index.html")
 });

 app.listen("5000", () => {
    console.log("front end is up!!!");
 });