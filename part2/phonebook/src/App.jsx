import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons";

const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPerson(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: person.length + 1,
    }
    person.filter(user => user.name === newName).length === 0 ?
      setPerson(person.concat(nameObject)) :
      alert(`${newName} is already added to phonebook`)
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


  const namesToShow = showAll ? person : person.filter(user => user.name.toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleNameChangeFilter={handleNameChangeFilter} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <Persons namesToShow={namesToShow} />
    </div>
  )


}

export default App