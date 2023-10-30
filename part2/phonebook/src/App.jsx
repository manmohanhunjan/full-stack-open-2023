import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [person, setPerson] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

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