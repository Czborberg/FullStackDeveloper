const Showphonebook =(props) => {

    return (
      <div>
        {props.personsToShow.map(person => 
          <p key={person.name}>{person.name} {person.number} <button onClick={props.removePerson}>delete</button></p>
        )}
      </div>
    )
  }

  export default Showphonebook