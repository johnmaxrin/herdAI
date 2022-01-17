var express = require('express');
var app = express();
const path = require('path');

const port = process.env.PORT || 3002;

if(process.env.NODE_ENV === 'production'){
   app.use(express.static('client/build'));
   app.get('*',(req,res)=>{
      req.sendFile(path.resolve(__dirname,'client/build','index.html'));
   })
 }


app.listen(port,(err)=>{
   if(err) return console.log(err);
   console.log("Running on port: ",port);
});