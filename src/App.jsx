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

  async function postData() {
	  const url = "https://api.airtable.com/v0/appodGKgM3CqEfx4u/Table%201?maxRecords=3";
	  try {
	      const response = await fetch(url);
        // headers: {
        //   Authorization: "Bearer" + import.meta.env.VITE_Airtable_TOKEN
        // } 

        if (!response.ok) {
	      throw new Error(`Response status: ${response.status}`);
	    }

	    const result = await response.json();
	    return result;
        
	  } catch (error) {
	    console.error(error);
      throw new Error('Failed to fetch starships.');
	  }
	}
};

export default App
