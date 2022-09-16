import { Sequelize } from "sequelize";
 
const db = new Sequelize('virtualcafe_db', 'virtual_cafe', 'my$6cafe', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;