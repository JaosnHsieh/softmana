var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'soft-mana'
    },
    port: process.env.PORT || 3000,
    db: {
      name:"WMSoft",
      username:"sa",
      password:"`1qa~!QA",
      host:"192.168.11.24",
      instanceName:"MSSQLSERVER"
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'soft-mana'
    },
    port: process.env.PORT || 3000,
    db: {
      name:"WMSoft",
      username:"sa",
      password:"`1qa~!QA",
      host:"192.168.11.24",
      instanceName:"MSSQLSERVER"
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'soft-mana'
    },
    port: process.env.PORT || 3000,
    db: {
      name:"WMSoft",
      username:"sa",
      password:"`1qa~!QA",
      host:"192.168.11.24",
      instanceName:"MSSQLSERVER"
    }
  }
};

module.exports = config[env];
