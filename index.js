const app = require('./app');

const port = 3000;


app.get('/',(req, res)=>{
    res.send("Hello, NodeJs Developer");
});

app.listen(port, ()=>{
    console.log('Server Listing on Port http://172.19.82.172:'+port);
});