/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_DEP', {
    DEP_NO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    REF_NO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEP_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Lv: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tb_DEP'
  });
};
