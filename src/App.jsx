// src/App.jsx
import { useState, useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipSearch/StarshipList';
import  { getAllStarships } from './services/starshipService';
import './App.css'

const App = () => {
  const [starships, setStarships] = useState([]);
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState ([]);
  const [lastSearchTerm, setLastSearchTerm] = useState('')
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getAllStarships();
        setStarships(data);
        setStarshipsData(data);
        setDisplayedStarships(data);
      } catch (error) {
        console.error ('Error in App:', error.message)
      }
    }

  fetchStarships()
  },[])

  const handleSubmit = (searchTerm) => {
    setLastSearchTerm(searchTerm);

     if (searchTerm.trim()) {
      setSearchHistory(prev => {
        const filtered = prev.filter(term => term !== searchTerm);
        return [searchTerm, ...filtered].slice(0, 3);
      });
    }
    
    if (!searchTerm.trim()) {
      setDisplayedStarships(starshipsData)
    } else {
      const filtered = starshipsData.filter(ship => 
        ship.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedStarships(filtered)
    }
  };

    const handleReset = () => {
    setDisplayedStarships(starshipsData); 
    setLastSearchTerm('');                  
    setSearchHistory([]);                  
  };

  const hasSearchFilter = searchHistory.length > 0 || displayedStarships.length < starshipsData.length;

  return (
    <div className='App'>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <StarshipSearch 
        onSearch={handleSubmit}
        onReset={handleReset}
        lastSearch={lastSearchTerm}
        searchHistory={searchHistory}
        hasSearchFilter={hasSearchFilter}
      />

      <h2>Starships</h2>
      <p>Number of results: {displayedStarships.length}</p>
      <StarshipList starships={displayedStarships} />
    </div>
  )
}

  export default App;
