const Search = ({ handleInput, search }) => {
  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search} //nornally would work after any key but we set it to 'Enter'
      />
    </section>
  );
};

export default Search;
