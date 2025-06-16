export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("Transactions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    buyerName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    menus: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("Menus");
}
