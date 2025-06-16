import bcrypt from "bcrypt";

export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert("Users", [
    {
      name: "admin",
      email: "admin@email.com",
      password: bcrypt.hashSync("admin123", 10),
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "kasir1",
      email: "kasir1@email.com",
      password: bcrypt.hashSync("kasir123", 10),
      role: "kasir",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete("Users", null, {});
}
