var fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  config = require('../../config/config'),
  db = {};

var sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
           host: config.db.host,
           dialectOptions: {
             instanceName: config.db.instanceName
              },
           dialect: 'mssql',
           pool: {
             max: 5,
             min: 0,
             idle: 10000
         },
        define: {
        timestamps: false
        },
        timezone:"+08:00" 
       });

 sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
      

      
fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
