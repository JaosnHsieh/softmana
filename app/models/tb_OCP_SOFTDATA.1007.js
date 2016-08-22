/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_SOFTDATA.1007', {
    SOFT_BATCH_NUM: {
      type: 'NCHAR',
      allowNull: false
    },
    STATUS_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_USE_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_PRODUCT_VERSION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_SERIAL_NUMBER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_FUNCTION_TYPE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_PRODUCT_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_USING_COUNT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_ENVIRONMENT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_AVALIBLE_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_SOURCE_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_SOURCE_TYPE_OTHER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_SOURCE_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_STORE_MEDIA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_STORE_MEDIA_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOFT_DOCUMENT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_TOTAL_COST: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_RENT_COST: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_START_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SOFT_COMMENT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_OWN_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_OWN_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_APPLICATION_DEP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_APPLICATION_USER: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_IMPAIR_REASON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOFT_IMPAIR_HANDLE_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOFT_IMPAIR_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SOFT_IMPAIR_MANAGER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CREATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DEP_OLD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_OWN_DEPNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_OWN_USERNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OWN_DEP_OLD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_APP_DEPNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_APP_USERNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    APP_DEP_OLD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tmpID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RECORD_IN_NO: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tb_OCP_SOFTDATA.1007'
  });
};
