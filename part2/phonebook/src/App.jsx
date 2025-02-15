import { useEffect, useState } from 'react'
import Form from './components/FormComponent'
import Numbers from './components/NumbersComponent'
import Filter from './components/FilterComponent'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(persons)

  useEffect(() => {setSearchResults(persons)}, [persons])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter props={{persons, searchTerm, setSearchTerm, setSearchResults}} />
      <Form props={{persons, setPersons, newName, setNewName, newNumber, setNewNumber}} />
      <h2>Numbers</h2>
      <Numbers persons={searchResults} />
    </div>
  )
}





export default App