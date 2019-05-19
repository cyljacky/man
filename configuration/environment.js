module.exports = {
  corsHosts: [
    // 'http://example1.com'
  ],
  
  database: {
    "development": { 
      "username": "api",
      "password": "api-pw",
      "database": "api",
      "host": "api-database",
      "dialect": "mariadb",
      "port": 3306
    }
  }

};
