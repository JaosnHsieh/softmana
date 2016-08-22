/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Files', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    xTable: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Table_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FilePath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Files'
  });
};
