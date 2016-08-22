/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_APPEND_DATA_1007', {
    RECORD_IN_NO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_BATCH_NUM: {
      type: 'NCHAR',
      allowNull: false
    },
    SN_NUM: {
      type: 'NCHAR',
      allowNull: false
    }
  }, {
    tableName: 'tb_OCP_APPEND_DATA_1007'
  });
};
