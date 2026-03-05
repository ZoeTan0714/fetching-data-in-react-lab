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
  const [lastSearchTerm, setLastSearchTerm] = useState('');

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

    if (!searchTerm.trim()) {
      setDisplayedStarships(starshipsData)
    } else {
      const filtered = starshipsData.filter(ship => 
        ship.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedStarships(filtered)
    }
  };


  return (
    <div className='App'>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <StarshipSearch 
        onSearch={handleSubmit}
        lastSearch={lastSearchTerm}
      />

      <h2>Starships</h2>
      <p>Number of results: {displayedStarships.length}</p>
      <StarshipList starships={displayedStarships} />
    </div>
  )
}

  export default App;
