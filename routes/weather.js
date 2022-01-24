const express = require('express')
const router = express.Router()
const axios = require('axios')
/* GET WEATHER */

router.get('/get/:country', (req, res, next) => {
  const COUNTRY = encodeURI(req.params.country)

  axios.get(`http://api.weatherstack.com/current?access_key=df78b26295995c4656d8f9351594fe4e&query=${COUNTRY}`)

    .then(function (response) {
      // handle success
      if (response.data.error) {
        return res.send({ error: 'Hubo un error, por favor intentalo mas tarde' })
      }
      const weather = {
        name: response.data.location.name,
        location: response.data.location.country,
        temperature: response.data.current.temperature
      }
      res.send(weather)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
})

module.exports = router
