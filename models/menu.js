import { Model, DataTypes } from "sequelize";

class Menu extends Model {
  static initModel(sequelize) {
    Menu.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        category: DataTypes.STRING,
      },
      { sequelize, modelName: "Menu" }
    );
  }
}

export default Menu;
