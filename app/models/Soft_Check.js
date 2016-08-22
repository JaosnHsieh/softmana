/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Soft_Check', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AMT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Table_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Creat_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Creat_User: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Creat_UName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Soft_Check'
  });
};
