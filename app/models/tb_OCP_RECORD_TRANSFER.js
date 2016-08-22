/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_OCP_RECORD_TRANSFER', {
    RECORD_IN_NO: {
      type: DataTypes.INTEGER,
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
    SOFT_OWN_DEP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_OWN_USER: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_USING_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_USING_USER: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SOFT_NOW_PRODUCT_VERSION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_NOW_TOTAL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_NOW_AVALIBLE: {
      type: DataTypes.STRING,
      allowNull: true
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
    APP_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOFT_USING_DEPNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SOFT_USING_USERNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Total_BK: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_OCP_RECORD_TRANSFER'
  });
};
