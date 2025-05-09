const dbConnect=require('./mongodb')
const express=require('express');
const {response}=require('express');
const app=express();

app.get('/',async(requestAnimationFrame,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})

app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("Data Inserted Successfully");
})