
const express = require("express");
const https = require("https");
const app = express();



app.get("/",function(req,res){
    res.send("Server has started.");
});

app.listen(3000,function(){
    console.log("Server started at port 3000.");
});
