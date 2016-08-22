/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp1', {
    SOFT_BATCH_NUM: {
      type: 'NCHAR',
      allowNull: false
    },
    TID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tmp1'
  });
};
