import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/user_actions';

function UserSearchBar(props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const { value } = event.target;
    setQuery(value);
    let searchInput = value.split(" ");

    const formData = new FormData();
    formData.append('user[first_name]', searchInput[0]);
    formData.append('user[last_name]', searchInput.pop);

    props.searchUsers(formData).then(searchResults => { 
      setResults(searchResults)
    })
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

const mSTP = (state, ownProps) => {
  return {

  }
}

const mDTP = (dispatch) => {
  return {
    searchUsers: (searchQuery) => dispatch(fetchSearchResults(searchQuery)),
  }
}

export default connect(mSTP, mDTP)(UserSearchBar);