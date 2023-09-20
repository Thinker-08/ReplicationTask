const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/index');
const sequelize = require('./config/db');
const cors = require('cors');
app.use(cors());
const dbConnection=async()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        sequelize.sync().then((result)=>{
            console.log('Connection has been established successfully.');
        }).catch((err)=>{
            console.log(err);
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

app.use("/api/routes", routes);

app.listen(8080 || process.env.PORT,  async() => {
    console.log(`Server started at ${8080 || process.env.PORT}`);
    await dbConnection();
})