import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Filter from './components/Filter'
import NewPhonebookEntry from './components/NewPhonebookEntry'
import Showphonebook from './components/ShowPhonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFiltered, setShowFiltered] = useState('')
  const [notificationMessage, setNotificationMessage] = useState([])

  useEffect(() => {
    console.log('effect')
    phonebookService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

console.log('render', persons.length, 'persons');

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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phonebookService
          .update(persons.find(person => person.name === newName).id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    setNotificationMessage({message: `Added '${personObject.name}' to the phonebook`,color: 'green'})
    console.log('notificationMessage', notificationMessage);
    setTimeout(() => {
      setNotificationMessage({message: null})
    }, 5000)

    
  }

  const removePerson = (id) => {
    console.log('button clicked', id)
    const removedpersonname=persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${removedpersonname}?`)) {
      phonebookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.log('error', error);
          setNotificationMessage({message: `Information of '${removedpersonname}' was already removed from server`,color: 'red'}
          )
          setTimeout(() => {
            setNotificationMessage({message: null})
          }, 5000)
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage.message} color={notificationMessage.color} />
      <Filter handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <NewPhonebookEntry addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Showphonebook personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App