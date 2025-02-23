import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataSourceMarketplace = ({ onSelectSource }) => {
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSources = async () => {
            const response = await axios.get('/api/data/sources');
            setSources(response.data.sources);
            setLoading(false);
        };

        fetchSources();
    }, []);

    return (
        <div className="data-source-marketplace">
            <h2>Data Source Marketplace</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {sources.map((source, index) => (
                        <li key={index} onClick={() => onSelectSource(source)}>
                            {source.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataSourceMarketplace;