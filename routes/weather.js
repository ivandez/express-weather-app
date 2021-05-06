const express = require('express')
const router = express.Router()
const axios = require('axios')
/* GET WEATHER */

router.get('/get/:country', (req, res, next) => {
  const COUNTRY = encodeURI(req.params.country)

  // axios.get(`http://api.weatherstack.com/current?access_key=fbca4f6a360e658244c5ac5a7f9bda21&query=${COUNTRY}`)

  //   .then(function (response) {
  //     // handle success
  //     if (response.data.error) {
  //       return res.send('Hubo un error, por favor intentalo mas tarde')
  //     }
  //     const weather = {
  //       name: response.data.location.name,
  //       location: response.data.location.country,
  //       temperature: response.data.current.temperature
  //     }
  //     res.send(weather)
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error)
  //   })

  const weather = {
    name: 'asd',
    location: 'asd',
    temperature: 33
  }

  setTimeout(() => {
    res.send(weather)
  }, 2000)
})

module.exports = router
