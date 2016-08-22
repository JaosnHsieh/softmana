/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Soft_Apply', {
    IDNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OWN_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OWN_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OWN_UserNO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    USING_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    USING_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Version: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AMT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Impair_Reason: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Impair_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Impair_Handle_Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Creat_User: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Creat_UName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Creat_DEP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Creat_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Appr_User: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Appr_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Appr_Memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ext: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Soft_Apply'
  });
};
