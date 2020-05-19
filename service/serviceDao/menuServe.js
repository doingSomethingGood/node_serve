const { pool } = require('../../config/mysqlConfig')
module.exports = {
  query: function (params, callback) {
    let sql = 'select * from sys_menu';
    pool.query(sql, (err, result) => {
      if (err) throw err
      callback(result);
    })
  }
}