import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notiMessage, setNotiMessage] = useState(null)
  const [notiColor, setNotiColor] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialContacts => {
        setPerson(initialContacts)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: person.length + 1,
    }
    const numberObject = person.find(user => user.name === newName)
    const changedNumber = { ...numberObject, number: newNumber }

    person.filter(user => user.name === newName).length === 0 ?
      phonebookService
        .create(personObject)
        .then(returnedContact => {
          setPerson(person.concat(returnedContact))
          setNotiColor('green')
          setNotiMessage(
            `Added ${returnedContact.name}`
          )
          setTimeout(() => { setNotiMessage(null) }, 5000)
        }) : window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) ?
        phonebookService
          .update(numberObject.id, changedNumber)
          .then(returnedContact => {
            setPerson(person.map(user => user.id !== numberObject.id ? user : returnedContact))
            setNotiColor('yellow')
            setNotiMessage(
              `${returnedContact.name}'s number changed`
            )
            setTimeout(() => { setNotiMessage(null) }, 5000)
          })
          .catch(error => {
            setNotiColor('red')
            setNotiMessage(
              `Information of ${numberObject.name} has already been removed from server`
            )
            setTimeout(() => { setNotiMessage(null) }, 5000)
            setPerson(person.filter(user => user.id !== numberObject.id))
          })
        : alert('cancelled')

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameChangeFilter = (event) => {
    setNewFilter(event.target.value)
    event.target.value === '' ? setShowAll(true) : setShowAll(false)
  }

  const handleDeletePerson = (id) => {
    const personDelete = person.find(user => user.id === id)
    const result = window.confirm(`Delete ${personDelete.name} ?`)
    result ? phonebookService
      .deletePerson(id)
      .then(() => {
        setNotiColor('red')
        setNotiMessage(
          `${personDelete.name} deleted`
        )
        setPerson(person.filter(user => user.id !== id))
        setTimeout(() => { setNotiMessage(null) }, 5000)
      }
      ) : console.log('error')
  }

  const namesToShow = showAll ? person : person.filter(user => user.name.toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notiMessage} color={notiColor} />
      <Filter newFilter={newFilter} handleNameChangeFilter={handleNameChangeFilter} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <Persons namesToShow={namesToShow} deletePerson={handleDeletePerson} />
    </div>
  )


}

export default App