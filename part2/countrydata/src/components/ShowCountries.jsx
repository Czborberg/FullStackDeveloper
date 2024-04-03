const ShowCountries =(props) => {

    if (props.countriesToShow.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }

    if (props.countriesToShow.length === 1) {
        return (
          console.log('props', props),
          <div>
            <h2>{props.countriesToShow[0].name.common}</h2>
            <p>Capital: {props.countriesToShow[0].capital}</p>
            <p>Area: {props.countriesToShow[0].area}</p>
            <p>Population: {props.countriesToShow[0].population}</p>
            <h3>Languages:</h3>
            <ul>
              {Object.values(props.countriesToShow[0].languages).map(language => 
                <li key={language}>{language}</li>
              )}
            </ul>
            <img src={props.countriesToShow[0].flags.png} alt='flag' width='200'/>
          </div>
        )
      }

    return (
      <div>
        {props.countriesToShow.map(country => 
          <p key={country.name.common}>{country.name.common} <button onClick={() => props.showCountry(country.name.common)}>show</button></p>
        )}
      </div>
    )
  }

  export default ShowCountries