const UserService = require('../services/user.services');

exports.register = async(req, res, next)=> {

    try{
        const {email, password} = req.body;
        const successRes = await UserService.registerUser(email,password);

        res.json({status: true, msg: "User Registered Successfully"});

    }catch(err){
        throw err;
    }

}



exports.login = async(req, res, next)=> {

    try{
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        console.log("----------------- ",user);
        if(!user){
            res.status(200).json({
                status : false,
                msg : "User doesn't exist",
            });
        }

        const isMatch = await user.commparePassword(password);
        if(isMatch === false){
            res.status(200).json({
                status : false,
                msg : "Password Invalid",
            });
        }

        let tokenData = {_id:user._id, email: user.email};
        const token = await UserService.generateToekn(tokenData,"secretKey", "1h");
        res.status(200).json({
            status : true,
            email : user.email,
            token : token
        });


    }catch(err){
        throw err;
    }

}