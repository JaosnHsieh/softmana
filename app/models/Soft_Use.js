/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Soft_Use', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEP_NO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    User_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEP_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Soft_Use'
  });
};
