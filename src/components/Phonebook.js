
import Person from './Person';

const Phonebook = ({ persons, searchQuery }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const personsToDisplay = searchQuery ? filteredPersons : persons;

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {personsToDisplay.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </>
  );
};

export default Phonebook;