const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/todo_project').on('open', ()=> {
    console.log("MongoDB connected");
}).on('error',()=>{
    console.log("MongoDB connection Error");
});

module.exports = connection;