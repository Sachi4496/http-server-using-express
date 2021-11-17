const express = require("express");

const app = express();

// REST API
/*HTTP VERBS

get all items 
get single item
post - create single item 
patch/put - update single item
delete - delete a single item

*/



const user = require("./mock.json");

app.get("/users",(req,res)=>{
    return res.send(user);
});
app.get("/",(req,res)=>{
    return res.send("Welcome to home page");
})

app.listen(2345,function(){
    console.log("listening on port 2345");
});