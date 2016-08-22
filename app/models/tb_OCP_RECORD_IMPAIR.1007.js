/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_RECORD_IMPAIR.1007', {
    RECORD_IN_NO: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    TRANS_IN_NO: {
      type: 'NCHAR',
      allowNull: false
    },
    SOFT_BATCH_NUM: {
      type: 'NCHAR',
      allowNull: false
    },
    IMPAIR_REASON: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    APPLICATION_USER: {
      type: DataTypes.STRING,
      allowNull: false
    },
    APPLICATION_DEP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    APPLICATION_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ACCESSOR_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACCESSOR_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ACCESSOR_RESULT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IMPAIR_HANDLE_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tb_OCP_RECORD_IMPAIR.1007'
  });
};
