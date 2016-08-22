/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ad_view_SSO', {
    department: {
      type: DataTypes.STRING,
      allowNull: true
    },
    employeeID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ad_view_SSO'
  });
};
