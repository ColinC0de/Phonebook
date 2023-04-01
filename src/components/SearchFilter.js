

const SearchFilter = ({ searchQuery, handleSearchQuery }) => {
  return (
    <div>
      Search: <input value={searchQuery} onChange={handleSearchQuery} />
    </div>
  );
};

export default SearchFilter;