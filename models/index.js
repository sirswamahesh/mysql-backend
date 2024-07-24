const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mahesh", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./user")(sequelize, DataTypes);

module.exports = db;
