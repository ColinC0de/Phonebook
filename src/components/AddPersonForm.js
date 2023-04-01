

const AddPersonForm = ({
  addPerson,
  handleNewName,
  handleNewNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;