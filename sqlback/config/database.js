const Sequelize = require('sequelize');

// module.exports = new Sequelize('minyar', 'root', '12345678', {
//     host: 'localhost',
//     dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//   });

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  /** DATABASE */
  db: {
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASS: 'root',
    DB_NAME: 'reputation',
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
     
  

  /** AUTH KEY */
   auth: {
    secret: "our-secret-key"
  }
    
}
};