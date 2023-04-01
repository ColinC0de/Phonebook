// import { useState } from 'react'
// import Person from "./components/Person"

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ]) ;
//   const [newName, setNewName] = useState('');
//   const [newNumber, SetNewNumber] = useState('');
//   //const [errorMessage, setErrorMessage] = useState('');

// const handleNewName = (event) => {

// setNewName(event.target.value);
// }

// const addPerson = (event) => {
//   event.preventDefault();
//   const nameObject = {
//     name: newName,
//     id: persons.length + 1,
//     number: newNumber
//   };

//   // Check if the name already exists in the phonebook
//   const existingPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
//   if (existingPerson) {
//     alert(`${newName} is already in the phonebook.`);
//     return;
//   }

//   // Add the new person to the phonebook
//   setPersons(persons.concat(nameObject));
//   setNewName('');

// };

// const handleNewNumber = (event) => {
//     SetNewNumber(event.target.value);
// }


//   return (
//     <div>
//       <h2>Phonebook</h2>
     
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input onChange={handleNewName} />
//           <div>number: <input onChange={handleNewNumber} /></div>
//         </div>
//         <div>
//           <button  type="submit">add</button>
//         </div>

//         <div>debug: {newName}</div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>
//       {persons.map(person => 
//         <Person key={persons.id} name={person.name} number={person.number} />
//       )}
//       </ul>

      
     
      
//       ...
//     </div>
//   )
// }

// export default App
import { useState } from 'react';
import AddPersonForm from './components/AddPersonForm';
import SearchFilter from './components/SearchFilter';
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleSearchQuery = (event) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      alert(`${newName} is already in the phonebook.`);
      return;
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchQuery={searchQuery} handleSearchQuery={handleSearchQuery} />
      <AddPersonForm
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <Phonebook persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;