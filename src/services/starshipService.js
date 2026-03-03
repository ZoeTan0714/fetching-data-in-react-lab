	import { useEffect, useState } from "react";
	import { Link } from "react-router";
	
	export async function getAllStarships() {
	  const url = "https://swapi.info/api/";
	  try {
	    const response = await fetch(url);
	    
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
	


