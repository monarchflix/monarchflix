const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let users = [];

app.post("/register", (req,res)=>{
    const {username,password} = req.body;
    users.push({username,password});
    res.json({message:"User registered"});
});

app.post("/login",(req,res)=>{
    const {username,password} = req.body;

    const user = users.find(u=>u.username===username && u.password===password);

    if(user){
        res.json({message:"Login success"});
    }else{
        res.json({message:"Invalid login"});
    }
});

app.listen(3000,()=>{
    console.log("Server running http://localhost:3000");
});