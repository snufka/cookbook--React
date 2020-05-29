import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipe }) {
    return (

        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit__remove-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name"
                    className="recipe-edit__lable">
                    Name</label>
                <input type="text" name="name" id="name"
                    className="recipe-edit__input" value={recipe.name} />
                <label htmlFor="cookTime" className="recipe-edit__lable">
                    Cook Time</label>
                <input type="text" name="cookTime" id="cookTime"
                    className="recipe-edit__input" value={recipe.cookTime} />
                <label htmlFor="serving" className="recipe-edit__lable">
                    Serving</label>
                <input type="number" min="1" name="serving" id="serving"
                    className="recipe-edit__input" value={recipe.serving} />
                <label htmlFor="instructions" className="recipe-edit__lable">
                    Instructions</label>
                <textarea name="instructions" id="instructions"
                    className="recipe-edit__input" value={recipe.instructions}> </textarea>
            </div>
            <br />
            <label className="recipe-edit__lable">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (<RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />))}
                <RecipeIngredientEdit />
                <RecipeIngredientEdit />
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn-primary">Add Ingredient</button>
            </div>
        </div>


    )
}
