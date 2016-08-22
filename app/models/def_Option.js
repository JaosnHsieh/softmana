/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('def_Option', {
    Table_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Col_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Option_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Option_Value: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'def_Option'
  });
};
