const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

// APP SETTINGS
const PORT = 3000
const publicPath = path.join(__dirname, '/public')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'html')

//  ROUTES
app.get('/', (req, res) => {
  res.sendFile('inicio', { root: publicPath })
})

app.listen(PORT, () => {
  console.log(`Server up listen ${PORT} port`)
})

module.exports = app
