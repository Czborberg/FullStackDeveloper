import { useState } from 'react'
import Filter from './components/Filter'
import NewPhonebookEntry from './components/NewPhonebookEntry'
import Showphonebook from './components/ShowPhonebook'

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
      <Filter handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <NewPhonebookEntry addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Showphonebook personsToShow={personsToShow}/>
    </div>
  )
}

export default App