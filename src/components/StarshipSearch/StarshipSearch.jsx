import { useState } from 'react';

function StarshipSearch ({onSearch, lastSearch}) {
    const [searchTerm, setSearchTerm] = useState ('')
    const [prevSearchTerm, setPrevSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setPrevSearchTerm(searchTerm);
        onSearch(searchTerm);
        setSearchTerm('');
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                valuel={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
            <p>
                <strong>Last search:</strong>{' '}
                {lastSearch ? (<>"{lastSearch}"</>) : ('Search for a starship by name')}
            </p>
        </form>
    
        </div>
    )
}
export default StarshipSearch;