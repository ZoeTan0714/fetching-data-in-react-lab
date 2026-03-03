// src/App.jsx
import { useState, useEffect } from 'react'
import StarshipSearch from './components/StartshipSearch';
import StartshipList from './components/StartshipSearch';
import  { getAllStarships } from './services/starshipService';
import './App.css'

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState ([]);

  useEffect(() => {
      getAllStarships();    
  },[]);

  

  return (
    <h1>Hello world!</h1>
  );
}

export default App
