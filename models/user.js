import { Model, DataTypes } from "sequelize";

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      { sequelize, modelName: "User" }
    );
  }
}

export default User;
