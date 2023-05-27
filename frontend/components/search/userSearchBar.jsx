import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/user_actions';
import { AiOutlineSearch } from 'react-icons/ai';

function UserSearchBar(props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const { value } = event.target;
    setQuery(value);
    let searchInput = value.split(" ").filter(e => e); //Filters out empty spaces

    let formData = new FormData();
    formData.append('user[first_name]', searchInput[0]);
    if (searchInput.length > 1){
      formData.append('user[last_name]', searchInput.pop());
    }

    // console.log(formData.get('user[first_name]'));
    // console.log(formData.get('user[last_name]'));

    props.searchUsers(formData).then(searchResults => { 
      setResults(Object.values(searchResults.users))
    })
  };

  return (
    <div>
      <div id="header-search-bar">
        <AiOutlineSearch/>
        <input placeholder="Search Fotobook" type="text" value={query} onChange={handleSearch}/>
      </div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.first_name} {result.last_name}</li>
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