import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./configure.js";
import mongoose from "mongoose";
const app= express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to my new basic backend project')
})
     
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to db');
        app.listen(PORT,()=>{
            console.log(`app is listending to port : ${PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error);
    });

    const userSchema = new mongoose.Schema({
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true,
          unique: true
        },
        age: {
          type: Number,
          required: false,
          default: null,
          min: 18
        }
      });
      
      // Create a model for the user collection based on the user schema
      const User = mongoose.model('User', userSchema);
      
      // Use the User model to create and save a new user document
      const newUser = new User({
        firstName: 'Aadi',
        lastName: 'Doe',
        email: 'jAadkji@example.com',
        age: 21
      });
      
     app.get('/users',async(req,res)=>{
        try {
            const users = await User.find({});
        } catch (error) {
            console.log(error.message);
            response.status(500).send({message:error.message})
        }
     })