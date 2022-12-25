const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const{JWT_KEY}=require('../config/server-config');

const UserRepository=require('../repository/user-repository');

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){
        try {
            const user=await this.userRepository.create(data);
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
            const result=jwt.sign(user,JWT_KEY,{expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN TOKEN CREATION");
            throw(error);
        }
    }

    async signIn(email,plainPassword){
        try {
            //step1->fetch the user by email
            const result=await this.userRepository.getByEmail(email);
            //step2->commpare icomin plainPassword with encryptedPassword
            const passwordMatch=this.checkPassword(plainPassword,user.password);
            if(!passwordMatch){
                console.log("password doesn't match");
                throw{eror:'incorrect password'};
            }
            //step3-> if password match create and return the jwtToken to the user
            const newJWT=this.createToken({email: user.email,id:user.id});
            return newJWT;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN SIGNIN PROCESS");
            throw(error);
        }
    }

    async isAuthenticated(token){
        try {
            const isVerified=userService.verifyToken(token);
            if(!isVerified){
                throw{error: 'Invalid Token'};
            }
            const user=this.userRepository.getById(response.id);
            if(!user){
                throw {error: 'No user with the corresponding token exists'};
            }
           return user.id;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN SIGNIN PROCESS");
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

    checkPassword(userInputPlainPassword, encryptedPAssword){
        try {
            return bcrypt.commpareSync(userInputPlainPassword,encryptedPAssword);
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN PASSWORD VERIFICATION",error);
            throw(error);
        }
    }
}

module.exports=UserService;