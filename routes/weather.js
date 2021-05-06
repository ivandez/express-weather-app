const express = require('express')
const router = express.Router()

/* GET WEATHER */

router.get('/get/:country', (req, res, next) => {
  res.send(req.params.country)
})

module.exports = router
