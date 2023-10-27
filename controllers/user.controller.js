const UserService = require('../services/user.services');

exports.register = async(req, res, next)=> {

    try{
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        if(user == null){
            const successRes = await UserService.registerUser(email,password);
            res.json({status: true, msg: "User Registered Successfully"});
        }
        else{
            res.status(200).json({
                status : false,
                msg : "Email Already Exist.!",
            });
        }
        

    }catch(err){
        throw err;
    }

}



exports.login = async(req, res, next)=> {

    try{
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        if(user == null){
            res.status(200).json({
                status : false,
                msg : "User doesn't exist",
            });
        }

        else{
            const isMatch = await user.commparePassword(password);
            if(isMatch == false){
                res.status(200).json({
                    status : false,
                    msg : "Password Invalid",
                });
            }
            else{
                let tokenData = {_id:user._id, email: user.email};
                const token = await UserService.generateToekn(tokenData,"secretKey", "1h");
                res.status(200).json({
                    status : true,
                    msg    : "Login Success",
                    email  : user.email,
                    token  : token
                });
            }

        }
        

    }catch(err){
        throw err;
    }

}