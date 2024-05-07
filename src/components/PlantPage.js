import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  function handleAddNewPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
