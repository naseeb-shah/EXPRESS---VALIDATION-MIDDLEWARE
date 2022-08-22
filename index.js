// const { json } = require('express')
const { request } = require('express')
var dotenv = require('dotenv')
var bodyParser = require('body-parser')

dotenv.config({ path: './.env' });

const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(bodyParser.json())
// app.use(json)
//res.send(todo)



app.post('/',(req,res,next)=>{
     x=req.body
  let { ID,  Name,Rating,Description,Genre,Cast}=x

if(ID.isNan||Rating.isNan|| typeof Name !=String||  typeof Description!=String ||  typeof Genreinstanceof!= String)
{res.send("bad request")
return}
     next()
},(req,res)=>{
    res.send("MOves add successfully")
})


app.listen(1000,()=>{
    console.log('serveris consort')
})

