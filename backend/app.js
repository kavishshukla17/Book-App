const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
//connect to MongoDb

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MONGODB"))
.catch((error)=>console.log("Error in connection",error));

//design in book schema

const BookSchema=new mongoose.Schema({
    title:String,
    author:String,
    date:String,
    image:String
})

//Design Book model
const Book=mongoose.model("MyBook",BookSchema)

app.get('/books',async(req,res)=>{
    try 
    {   const newbook=new Book(req.body);
        await newbook.save();
        res.status(200).send('Books Added')
    }
    catch(error)
    {
        res.status(500).send("server Error")
    }
})

app.listen(9000,()=>{
    console.log("Server is running on port 9000")
})