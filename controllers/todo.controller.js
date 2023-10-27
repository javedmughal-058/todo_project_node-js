const TodoService = require('../services/todo.services');

exports.createTodo = async(req, res, next)=> {

    try{
        const {userId, title, description} = req.body;
        let todoCreate = await TodoService.createTodo(userId, title, description);
        if(todoCreate != null){ 
            res.status(200).json({
                status  : true,
                msg     : "Todo Saved",
                success : todoCreate,
            });
        }
    

    }catch(err){
        throw err;
    }

}


exports.getUserTodo = async(req, res, next)=> {

    try{
        const {userId} = req.body;
        let userTodoData = await TodoService.getTodoData(userId);
        if(userTodoData != null){ 
            res.status(200).json({
                status  : true,
                msg     : "Success",
                data    : userTodoData,
            });
        }
        else{
            res.status(200).json({
                status  : false,
                msg     : "Failed",
                data    : null,
            });
        }
    

    }catch(err){
        throw err;
    }

}


exports.deleteTodo = async(req, res, next)=> {

    try{
        console.log("deleting......");
        const {taskId} = req.body;
        let deleted = await TodoService.deleteTodoData(taskId);
        // console.log(deleted);
        if(deleted){ 
            res.status(200).json({
                status  : true,
                msg     : "Task Deleted",
            
            });
        }
        else{
            res.status(200).json({
                status  : false,
                msg     : "Task Not Deleted",
        
            });
        }
    

    }catch(err){
        res.status(200).json({
            status  : false,
            msg     : "Failed "+err,
        });
    }

}

exports.updateTodo = async(req, res, next)=> {

    try{
        console.log("upating......");
        const {id, title, description} = req.body;
        let updated = await TodoService.upateTask(id, title, description);
        
        if(updated){ 
            res.status(200).json({
                status  : true,
                msg     : "Task Updated",
            
            });
        }
        else{
            res.status(200).json({
                status  : false,
                msg     : "Task Not Updated",
        
            });
        }
    

    }catch(err){
        res.status(200).json({
            status  : false,
            msg     : "Failed "+err,
        });
    }

}