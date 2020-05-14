import React, { useEffect, useState } from 'react';
import API from '../../api';

function SearchBar() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');
    useEffect(() => {
              
        //When [] changes, useEffect runs 
    }, [query]);

    //Update input string 
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    //Flow block for API request until the form is submitted 
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        //Reset search 
        setSearch('');
    }
    return (
        <form onSubmit={getSearch}>
            <input className="search-bar" type="text"
                value={search}
                onChange={updateSearch} />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;