import React, { useState } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css';
import uuidv4 from 'uuid/v4';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      cookTime: '1:00',
      instractions: 'ins',
      ingredients: [
        { id: uuidv4(), name: '', amount: '1 Tbs' }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <RecipeList recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete} />
  )

}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instractions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '1 Kilo'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 TSP'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instractions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '1 Kilo'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 TSP'
      }
    ]
  }
]

export default App;
