/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Soft_Apply_Soft', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Apply_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Soft_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Soft_Apply_Soft'
  });
};
