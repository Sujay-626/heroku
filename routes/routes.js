const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const schema = require('../models/user_schema');

router.post('/register', async (req,res)=>{

// checking if email is in the database
    const emailexist = await schema.findOne({email:req.body.email});
    if(emailexist) return res.status(400).send("Email already exists");

//hashing password
    const salt =  await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password,salt);

    const user = new schema({
        name:req.body.name,
        email:req.body.email,
        password:hashedpassword
    });
    try{
        await user.save();
        res.send(user)
    }
    catch(err){
        res.send(err.message)
    }   
});

router.post('/login',async (req,res)=>{
    const User = await schema.findOne({email:req.body.email});
    if(!User) return res.status(400).send('Email does`nt exist/wrong');
    //password is correction
    const validpass = await bcrypt.compare(req.body.password, User.password);
    if(!validpass) return res.status(400).send('Invalid Password');

    //create and assign a token
    const token = jwt.sign({_id:User._id}, process.env.TOKEN_SECRET);
    res.setHeader('login-token',token).send(token);
    
    // res.send('Successfully logged in')
});

module.exports= router;