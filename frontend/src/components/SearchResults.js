import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResults = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            const response = await axios.get('/api/search', {
                params: { query, filter, sort }
            });
            setResults(response.data.results);
            setLoading(false);
        };

        fetchResults();
    }, [query, filter, sort]);

    return (
        <div className="search-results">
            <div className="search-options">
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                </select>
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;