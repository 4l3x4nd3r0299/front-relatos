// SearchBar.js
import React, { useState } from 'react';
import '../css/searchbar.css';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                placeholder="Search for a book..."
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
