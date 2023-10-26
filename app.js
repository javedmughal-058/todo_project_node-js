const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routes/user.route');
const todoRouter = require('./routes/todo.route');

const app = express();

app.use(body_parser.json());
app.use('/', userRouter);
app.use('/', todoRouter);

module.exports = app;


//npm run dev