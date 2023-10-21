const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{


    static async registerUser(email, password){
        try{
            const createUser = new userModel({email, password});
            return createUser.save();

        }catch(err){
            throw err;
        }
    }

    static async checkUser(email){
        try{
            return await userModel.findOne({email});

        }catch(err){
            throw err;
        }
    }

    static async generateToekn(tokenData, secretKey, jwt_expiry){
        try{
            return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expiry});

        }catch(err){
            throw err;
        }
    }



}

module.exports = UserService;