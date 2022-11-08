const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/routes')
const bodyparser =  require('body-parser');

dotenv.config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/user',routes)


mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true},
    {useUnifiedTopology:true})
    .then(()=>{
        console.log('Database connected');
    })
    .catch((err)=>{
        console.log(err)
    });

    app.get('/',(req,res)=>{
        res.send('Hello World!!')
    });

app.listen(3000,()=>{
    console.log('Listening to the port 3000')
});
