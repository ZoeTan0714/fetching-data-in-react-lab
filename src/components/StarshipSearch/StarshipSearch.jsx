import { useState } from 'react';

function StarshipSearch ({onSearch, onReset, lastSearch, searchHistory, hasSearchFilter}) {
    const [searchTerm, setSearchTerm] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        setSearchTerm('');
    };

    const handleHistoryClick = (term) => {
        onSearch(term);
        setSearchTerm('');
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter starship name..."
            />
            <button type="submit">Search</button>

            {hasSearchFilter && (
                <button 
                    onClick={onReset} 
                    className="show-all-button"
                    title="Clear search and show all starships"
                >Show all starships</button>
            )}
        </form>

 
    
        <div className="search-metadata">
            <div className="search-history">
                <strong>Recent searches:</strong>
                    {searchHistory && searchHistory.length > 0 ? (
                    <div className="history-tags">
                        {searchHistory.map((term, index) => (
                            <button
                                key={index}
                                className="history-tag"
                                onClick={() => handleHistoryClick(term)}
                            >
                        {term}
                        </button>
                        ))}
                    </div>
                    ) : (
                    <p className="no-history">Search for a starship by name.</p>
                )}
            </div>

            {lastSearch && (
                <p className="last-search">
                    <strong>Last search:</strong> "{lastSearch}"
                </p>
                )}
        </div>

        </div>
    )
}
export default StarshipSearch;