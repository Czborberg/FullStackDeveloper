import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFiltered, setShowFiltered] = useState('')

  const personsToShow = 
    persons.filter(person => person.name.toLowerCase().includes(showFiltered.toLowerCase()))
    console.log('personsToShow', personsToShow);
    console.log('showFiltered', showFiltered);

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
    console.log('newName', newName);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log('newNumber', newNumber);
  }

  const handleFilterChange = (event) => {
    setShowFiltered(event.target.value)
    console.log('showFiltered', showFiltered);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
          onChange={handleFilterChange}
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App