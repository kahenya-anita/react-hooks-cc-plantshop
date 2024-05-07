import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
//1) Fetching data using Fetch
//2) React hooks

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <ul className="cards">
      {plants.map((plants) => (
        <PlantCard
          key={plants.id}
          name={plants.name}
          image={plants.image}
          price={plants.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
