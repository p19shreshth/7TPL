import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            setLoading(true);
            try {
                const response = await axios.get(`/api/search/suggestions?q=${value}`);
                setSuggestions(response.data.suggestions);
            } catch (err) {
                setError('Error fetching suggestions');
            } finally {
                setLoading(false);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div className="error">{error}</div>}
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => setQuery(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;