const express=require('express');
const port=8000;
const app=express();
const data = require('./models/Data.json');
const userRouters = require('./router/users.js');

app.use('/',userRouters);
// app.get('/users',(req,res)=>{
//     res.send({data});
// });


app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})
