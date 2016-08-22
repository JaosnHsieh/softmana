/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_MANAGE_USERS', {
    MANAGE_IN_NO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MANAGE_ID: {
      type: 'NCHAR',
      allowNull: false
    },
    MANAGE_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_OCP_MANAGE_USERS'
  });
};
