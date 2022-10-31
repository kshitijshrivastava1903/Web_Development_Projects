const express = require("express");
const bodyParser = require("body-parser");

app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function(req,res){
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2);
    var n3 = n1+n2;
    res.send("Result is "+n3);
});

app.post("/bmicalculator",function(req,res){
    var w = Number(req.body.w);
    var h = Number(req.body.h);
    var result = (w/(h*h));
    res.send("Your bmi is :"+result);

});

app.listen(3000,function(){
    console.log("Server started and is listening at port 3000");
});
