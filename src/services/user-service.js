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
}

module.exports=UserService;