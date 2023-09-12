import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/user_actions';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResultBox from './userBox';

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

  let searchResults;
  if (results.length !== 0 && props.focused) {
    //Add another condition to check if input element is in focus
    searchResults = 
    <div id='header-search-results'>
      {results.map((user) => (
        <SearchResultBox key={user.id} user={user}/>
      ))}
    </div>
  } else if (props.focused) {
    searchResults = <div id='header-search-results'>
      <div id='empty-search-results'>No results</div>
    </div>
  } else {
    searchResults = <></>
  }

  return (
    <div id="header-search-bar">
      <AiOutlineSearch/>
      <input placeholder="Search Fotobook" type="text" value={query} onChange={handleSearch}/>
      {searchResults}
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