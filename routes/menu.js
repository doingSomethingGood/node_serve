const express = require('express');
const router = express.Router();
const { query } = require('../service/serviceDao/menuServe')

router.get('/getMenuList', (req, res, next) => {
  let params = req.query
  query(params, function (success) {
    res.json({
      code: 200,
      data: success
    })
    // console.log(error)
    // console.log(success)
  })
})

module.exports = router