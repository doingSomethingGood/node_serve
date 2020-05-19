const mysql = require('mysql')
// import mysql from 'mysql';
const mysql_config = {
  connectionLimit: 10, // 最大连接数
  host: '127.0.0.1', // 本地搭建则本机ip,远程服务器则远程服务器ip 
  post: '3306',
  user: 'root', // mysql 账户
  password: 'root123', // mysql 密码
  database: 'management_system' // 要操作的数据库// 这里等数据库创建之后放开就可以
};
const pool = mysql.createConnection(mysql_config);
pool.connect((err) => {
  if (err) throw err
  console.log('database connect success...')
})

// let sql = 'select * from sys_menu';
// pool.query(sql, (err, result) => {
//   if (err) throw err
//   console.log(result)
// })

module.exports = {
  pool
}