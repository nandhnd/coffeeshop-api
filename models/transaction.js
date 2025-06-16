import { Model, DataTypes } from "sequelize";

class Transaction extends Model {
  static initModel(sequelize) {
    Transaction.init(
      {
        userId: DataTypes.INTEGER,
        buyerName: DataTypes.STRING,
        menus: DataTypes.JSON,
        total: DataTypes.INTEGER,
      },
      { sequelize, modelName: "Transaction" }
    );
  }
}

export default Transaction;
