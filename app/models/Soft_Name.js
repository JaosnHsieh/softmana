/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Soft_Name', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Soft_Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Soft_Name'
  });
};
