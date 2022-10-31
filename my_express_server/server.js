

const express = require("express");
const app = express()


app.get("/",function(request,response){
    response.send("<h1>Hello World!!");

});

app.get("/about",function(req,res){
    res.send("This is about me page. I like to watch netflix.")
})


app.listen(3000,function(){
    console.log("Server started on port 3000.")
});
