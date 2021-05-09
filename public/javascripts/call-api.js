const country = document.querySelector('#country')
const name = document.querySelector('#name')
const temperature = document.querySelector('#temperature')
const form = document.querySelector('#weather-form')
const userInput = document.querySelector('#userInput')
const spinner = document.getElementById('spinner')
const countryNotFound = document.querySelector('#country_not_found')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  country.textContent = ''

  name.textContent = ''

  temperature.textContent = ''

  spinner.className = 'show'

  countryNotFound.className = spinner.className.replace('show', '')
  // `https://weather-app-express-node.herokuapp.com/weather/get/${userInput.value}`
  // `http://localhost:3000/weather/get/${userInput.value}`
  fetch(`https://weather-app-express-node.herokuapp.com/weather/get/${userInput.value}`).then(
    (res) => {
      res.json().then((data) => {
        spinner.className = spinner.className.replace('show', '')
        if ('error' in data) {
          console.log('error')
          console.log(data.error)
          countryNotFound.className = 'show'
        } else {
          const temperatureF = (data.temperature * 9) / 5 + 32
          country.textContent = data.location
          name.textContent = data.name
          temperature.textContent = `${data.temperature}°C/${temperatureF}°F`
        }
      })
    }
  ).catch(e => {
    spinner.className = spinner.className.replace('show', '')

    countryNotFound.className = 'show'
  })
})
