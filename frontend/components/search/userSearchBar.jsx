import React, { useState } from 'react';

function UserSearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const { value } = event.target;
    setQuery(value);
    const response = await fetch(`/search?q=${value}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearchBar;