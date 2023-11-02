const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{


    static async registerUser(email, password){
        const createUser = new userModel({email, password});
        return createUser.save();
    }

    static async checkUser(email){
        return await userModel.findOne({email});
    }

    static async generateToken(tokenData, secretKey, jwt_expiry){
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expiry});
    }



}

module.exports = UserService;