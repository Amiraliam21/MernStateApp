import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
const port = 4000

import mongoose from 'mongoose'
import router from './routes/user.route.js';
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDB!")
    }).catch((err) =>{
        console.log(err);
    });
    
    app.use('/api/user', router);

router.get('/test',(req,res)=>{
    res.send('Hello world')
})




app.listen(port, ()=>{
    console.log(`api is serving on port ${port}`)
})