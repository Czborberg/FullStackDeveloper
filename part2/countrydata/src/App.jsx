import { useState, useEffect } from 'react'
import countryService from './services/countries'
import weatherService from './services/weather'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'
import ShowWeather from './components/ShowWeather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [showFiltered, setShowFiltered] = useState('')
  const [weather, setWeather] = useState([])

  useEffect(() => {
    console.log('effect')
    countryService
      .getAll()
      .then(allCountries => {
        console.log('promise fulfilled')
        setCountries(allCountries)
      })
  }, [])

  const countriesToShow = 
    countries.filter(country => country.name.common.toLowerCase().includes(showFiltered.toLowerCase()))
    console.log('countriesToShow', countriesToShow);
    console.log('showFiltered', showFiltered);
  
  const weatherToShow =
    weather
    console.log('weatherToShow', weatherToShow);

  const weatherData = (country) => {
    weatherService
    .getWeather(country)
    .then(weatherData => {
      console.log('weatherData', weatherData);
      setWeather(weatherData)
      console.log('weather', weather);
    })
  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    setShowFiltered(event.target.value)
    console.log('showFiltered', showFiltered);
    const updatedCountriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log('updatedCountriesToShow', updatedCountriesToShow);
    if (updatedCountriesToShow.length === 1) {
      weatherData(updatedCountriesToShow[0].capital)
    }
  }

  const showCountry = (countryfunction) => {
    console.log('showCountry', countryfunction);
    setShowFiltered(countryfunction)
    const updatedCountriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countryfunction.toLowerCase()))
    console.log('updatedCountriesToShow', updatedCountriesToShow);
    if (updatedCountriesToShow.length === 1) {
      weatherData(updatedCountriesToShow[0].capital)
    }
  }

  console.log('weather', weather);

  return (
    <div>
      <h2>Countries</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <ShowCountries countriesToShow={countriesToShow} showCountry={showCountry} weather={weatherToShow}/>
      <ShowWeather countriesToShow={countriesToShow} weather={weatherToShow}/>
    </div>
  )
}

export default App
