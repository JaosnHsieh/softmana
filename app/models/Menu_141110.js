/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Menu_141110', {
    Ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Href: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Target: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ImgPath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsControl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idno: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Menu_141110'
  });
};
