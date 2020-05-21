require('dotenv').config()

module.exports = {
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    dialect  : "mysql"
}

// module.exports = {
//     username : 'root',
//     password : '123456',
//     database : 'projeto_strava',
//     host     : 'localhost',
//     port     : '3306',
//     dialect  : "mysql"
// }

