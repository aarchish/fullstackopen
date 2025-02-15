import React from 'react'

const Form = ({props}) => {
  const {persons, setPersons, newName, setNewName, newNumber, setNewNumber} = props

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("input name is:", newName)
    console.log("persons are:", persons)

    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
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