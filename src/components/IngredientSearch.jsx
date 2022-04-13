import React from "react";
import { useState } from "react";
import { ingredientArray } from "./ingredientArray";
import Ingredient from "./Ingredient";

function IngredientSearch() {
  const [ingredients, setIngredients] = useState(ingredientArray);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const onInput = (e) => {
    setSearchTerm(e.target.value);
    setLoading(true);
    filterIngredients();
    setLoading(false);
  };

  const filterIngredients = () => {
    setFilteredIngredients(
      ingredients.filter((ingredient) => ingredient.includes(searchTerm))
    );
  };

  return (
    <div className="ingredient-box-wrapper">
      <div className="ingredient-search-wrapper">
        {/* <div>{searchTerm !== "" && `You're searching for ${searchTerm}`}</div> */}
        <h2>Search for Ingredients here</h2>
        <input
          type="text"
          id="ingredient-search-box"
          value={searchTerm}
          onInput={onInput}
        />
        <div className="ingredients-wrapper">
          {searchTerm === "" &&
            ingredients.map((ingredient) => (
              <Ingredient
                ingredient={ingredient}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
              />
            ))}
        </div>

        {searchTerm !== "" && (
          <div className="ingredients-wrapper">
            {filteredIngredients.length > 0 ? (
              <>
                {filteredIngredients.map((filteredIngredient, idx) => (
                  <Ingredient
                    ingredient={filteredIngredient}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                  />
                ))}
              </>
            ) : (
              <div>no results</div>
            )}
          </div>
        )}
      </div>
      <div className="selectedIngredients-box">
        {selectedIngredients.length > 0 ? (
          <>
            <h2>You've Selected these ingredients:</h2>
            <div className="ingredients-wrapper">
              {selectedIngredients.map((selectedIngredient) => (
                <Ingredient
                  ingredient={selectedIngredient}
                  setSelectedIngredients={setSelectedIngredients}
                  selectedIngredients={selectedIngredients}
                />
              ))}
            </div>
          </>
        ) : (
          <h2>Selected Ingredients will appear over here</h2>
        )}
      </div>
    </div>
  );
}

export default IngredientSearch;
