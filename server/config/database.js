import { Sequelize } from "sequelize";
 
const db = new Sequelize('virtualcafe_db', '', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;