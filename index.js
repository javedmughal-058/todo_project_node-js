const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user.model');

const port = 3000;


app.get('/',(req, res)=>{
    res.send("Hello, node-js backend 'Developer'");
});

app.listen(port, ()=>{
    console.log('Server Listing on Port http://localhost:'+port); 
});