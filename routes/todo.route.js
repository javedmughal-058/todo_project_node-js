const router = require('express').Router();
const TodoController = require('../controllers/todo.controller');

router.post('/store', TodoController.createTodo);
router.post('/getUserTodo', TodoController.getUserTodo);
router.post('/deleteTodo', TodoController.deleteTodo);
router.post('/updateTodo', TodoController.updateTodo);

module.exports = router;