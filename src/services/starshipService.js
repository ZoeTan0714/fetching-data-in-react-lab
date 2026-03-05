
	export async function getAllStarships() {
	  const url = "https://swapi.info/api/starships";
	  try {
	    const response = await fetch(url);
        
		//response status for the 1st time 
		if (!response.ok) {
	      throw new Error(`Response status: ${response.status})`);
	    }
	    const result = await response.json();
		return result;

	  } catch (error) {
	    console.error(error);

		//throw error message
        throw new Error('Failed to fetch starships.');
	  }
	}
	


