/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('def_Treat', {
    Treat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Treat_Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'def_Treat'
  });
};
