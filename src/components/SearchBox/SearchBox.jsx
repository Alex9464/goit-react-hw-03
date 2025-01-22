const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;