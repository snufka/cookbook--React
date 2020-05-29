import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
    return (

        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="cookTime">Cook Time</label>
                <input type="text" name="cookTime" id="cookTime" />
                <label htmlFor="serving">Serving</label>
                <input type="number" min="1" name="serving" id="serving" />
                <label htmlFor="instructions">Instructions</label>
                <textarea name="nstructions" id="nstructions"></textarea>
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngredientEdit />
                {/*ingredients components */}
                <div>
                    <button>Add Ingredient</button>
                </div>
            </div>
        </div>

    )
}
