const dotenv = require('dotenv');
const {Sequelize} = require('sequelize');
dotenv.config();

try{
      const sequelize = new Sequelize('replication', 'root', 'Mihir@0802', {
            host: 'localhost',
            dialect: `mysql`,
            pool:{
                  max: 100,
                  min: 0,
                  acquire: 1000000,
                  idle: 10000
            },
            dialectOptions: {
                  connectTimeout: 1000000 
                }
       });
       sequelize.options.logging = false
       module.exports = sequelize;
} 
catch(err){
      console.log("Error: ", err)
}
