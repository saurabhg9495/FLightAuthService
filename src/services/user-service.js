const jwt=require('jsonwebtoken');
const{JWT_KEY}=require('../config/server-config');

const UserRepository=require('../repository/user-repository');

class UserService{
    constructor(){
        this.UserRepository=new UserRepository();
    }

    async create(data){
        try {
            const user=await this.UserRepository.create(data);
            return user;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN SERVICE LAYER");
            throw(error);
        }
    }

    async destroy(userId){
        try {
            
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN SERVICE LAYER");
            throw(error);
        }
    }

    createToken(user){
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn: '1h'});
            return result;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN TOKEN CREATION");
            throw(error);
        }
    }

    verifyToken(token){
        try {
            const result=jwt.verify(token,JWT_KEY);
            return result;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN TOKEN VALIDATION",error);
            throw(error);
        }
    }
}

module.exports=UserService;