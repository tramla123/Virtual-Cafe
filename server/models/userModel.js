import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users',{
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default User;