const dotenv=require('dotenv');
const bcrypt=require('bcrypt');
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    SALT: bcrypt.genSalt(10)
}