const country = document.querySelector('#country')
const name = document.querySelector('#name')
const temperature = document.querySelector('#temperature')
const form = document.querySelector('#weather-form')
const userInput = document.querySelector('#userInput')
const spinner = document.getElementById('spinner')

// const showSpinner = () => {
//   spinner.className = 'show'
//   setTimeout(() => {
//     spinner.className = spinner.className.replace('show', '')
//   }, 5000)
// }

form.addEventListener('submit', (e) => {
  e.preventDefault()

  country.textContent = ''

  name.textContent = ''

  temperature.textContent = ''

  spinner.className = 'show'

  fetch(`http://localhost:3000/weather/get/${userInput.value}`).then(
    (res) => {
      res.json().then((data) => {
        spinner.className = spinner.className.replace('show', '')

        if (data.error) {
          console.log('error')
          // console.log(data.error)
        } else {
          const temperatureF = (data.temperature * 9) / 5 + 32
          country.textContent = data.location
          name.textContent = data.name
          temperature.textContent = `${data.temperature}°C/${temperatureF}°F`
        }
      })
    }
  )
})

// const showSpinner = () => {
//   spinner.className = "show";
//   setTimeout(() => {
//     spinner.className = spinner.className.replace("show", "");
//   }, 5000);
// }
