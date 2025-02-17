import React from 'react'
import personsservice from '../services/personsservice'

const Form = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("input name is:", newName)
    console.log("persons are:", persons)

    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newName)) {
      const id = persons.find(person => person.name === newName).id
      if( window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsservice.update(id, personObject).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        })
      }
      return
    }
    personsservice.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
    setNewName('')
    setNewNumber('')
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <>
      <div>
        <h2>add a new Person</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          name:
          <input value={newName} onChange={handlePersonsChange}/>
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default Form