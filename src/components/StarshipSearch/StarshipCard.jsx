import React from "react";
// import './StarshipCard.css'


function StarshipCard ({ starship }) {
    return (
        <div className="startship-card">
           <h3>{starship.name}</h3>
           <div className="starship-details">
                <p>Class: {starship.starship_class} </p>
                <p>Manufacturer: {starship.manufacturer} </p>
                <p>Model: {starship.model} </p>
           </div>
        </div>
    )
}

export default StarshipCard;