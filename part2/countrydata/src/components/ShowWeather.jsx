const ShowWeather =(props) => {

    if (props.countriesToShow.length === 1 && props.weather.weather !== undefined) {
        return (
          console.log('props', props),
          console.log('props', props.weather.weather[0].icon),
          console.log('weather', props.weather.weather),
          <div>
            <h3>Weather in {props.weather.name}</h3>
            <p><strong>Temperature:</strong> {Math.round(props.weather.main.temp-273.15)} Celsius</p>
            <img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} alt='weather icon' width='100'/>
            <p>{props.weather.weather[0].description}</p>
            <p><strong>Wind:</strong> {props.weather.wind.speed} m/s</p>
          </div>
        )
      }
  }

  export default ShowWeather