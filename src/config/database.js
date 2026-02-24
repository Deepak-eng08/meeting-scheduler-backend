const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("meeting_db", "root", "5005", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;