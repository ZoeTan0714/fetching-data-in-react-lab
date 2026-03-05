import React from "react"
import StarshipCard from "./StarshipCard"

function StarshipList ({ starships}) {
    if (!starships || starships.length === 0) {
        return <div>No starships found</div>;
    }

    return (
        <div className="starship-list">
            {starships.map ((starship) => (
                <StarshipCard
                    key={starship.url || starship.name}
                    starship={starship}
                />
            ))}
        </div>
    );
}

export default StarshipList;
