import { useEffect, useState } from 'react'
import Form from './components/FormComponent'
import Numbers from './components/NumbersComponent'
import Filter from './components/FilterComponent'
import personsservice from './services/personsservice'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personsservice.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  console.log('Main App Component: persons', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(persons)

  useEffect(() => {setSearchResults(persons)}, [persons])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        persons={persons} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setSearchResults={setSearchResults} 
      />
      <Form 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      <h2>Numbers</h2>
      <Numbers 
        persons={searchResults} 
        setPersons={setPersons} 
      />
    </div>
  )
}





export default App