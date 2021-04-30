import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisineFilter, setCuisineFilter] = useState("All")

  const filteredFoods = foods.filter((food) => {
    if (cuisineFilter === "All") {

      return food;
    } else {
      return food.cuisine === cuisineFilter;
    }
  }
  );
  
  

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood)
    const newArray = [...foods, newFood]
    console.log(newArray)
    setFoods(newArray)
  }

  function handleLiClick(id) {
    setFoods(foods.filter(food => food.id !== id))
  }

  function heatLvlRaiser(id) {
    const newFoodArray = foods.map((food) => {
      if(food.id === id ) {
      return {...food, heatLevel: food.heatLevel+1}}
      else {return food}
      })
      setFoods(newFoodArray)
  }
  
 

  let foodElements = filteredFoods.map(food =>{
      return (<li>
        <h1>Food: {food.name}</h1>
        <h4>Cuisine: {food.cuisine}</h4>
        <h3 onClick={e => heatLvlRaiser(food.id)} style={{color:"red"}}>Heat Level: {food.heatLevel} (CLICK THIS ELEMENT TO MAKE SOME FYAH TRICK)</h3>
        <button onClick={e => handleLiClick(food.id)}>DELETE THIS MOFUGGIN FOOD</button>
      </li>)
  })

  

  function filterAction(value) {
    setCuisineFilter(value)
  }

  // const filteredFoods = foods.filter(food => food.cuisine === cuisineFilter)


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <h3>Filter these jawns with this dropdown</h3>
      <select onChange={e => filterAction(e.target.value)} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <ul>{foodElements}</ul>
    </div>
  );
}

export default SpicyFoodList;
