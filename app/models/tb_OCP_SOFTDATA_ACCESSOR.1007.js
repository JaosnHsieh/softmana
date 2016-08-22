/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_SOFTDATA_ACCESSOR.1007', {
    RECORD_IN_NO: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SOFT_BATCH_NUMBER: {
      type: 'NCHAR',
      allowNull: false
    },
    ACCESSOR_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACCESSOR_USER: {
      type: 'NCHAR',
      allowNull: true
    },
    ACCESSOR_RESULT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CREATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'tb_OCP_SOFTDATA_ACCESSOR.1007'
  });
};
