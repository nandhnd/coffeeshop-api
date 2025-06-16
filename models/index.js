import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

import User from "./user.js";
import Menu from "./menu.js";
import Transaction from "./transaction.js";

User.initModel(sequelize);
Menu.initModel(sequelize);
Transaction.initModel(sequelize);

User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

export { sequelize, User, Menu, Transaction };
