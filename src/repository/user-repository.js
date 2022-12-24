const {User}=require('../models/index');

class UserRepository{

    async create(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN REPOSITORY LAYER");
            throw(error);
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                id:userId
                }  
            });
            return true;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN REPOSITORY LAYER");
            throw(error);
        }
    }
}

module.exports=UserRepository;