import React from "react";
import personsservice from "../services/personsservice";

const Numbers = ({persons, setPersons}) => {
  console.log("persons", persons);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      personsservice.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(error => {
        console.error('Error deleting person:', error);
      });
    }
  }
  
  return (
    <table>
      <tbody>
        {persons.map(person =>
          <tr key={person.id}>
            <td>{person.name}</td> 
            <td>{person.number}</td>
            <td><button onClick={() => handleDelete(person.id)}>Delete</button></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Numbers;