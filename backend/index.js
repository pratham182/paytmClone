const express = require("express");
const mongoose=require("mongoose");

const app=express();
const rootRouter = require("./router/index");
app.use("/api/v1",rootRouter);

app.listen(2000,()=>{
    mongoose.connect("mongodb://localhost:27017").then(()=>{
        console.log("Connected");
    })
    
})