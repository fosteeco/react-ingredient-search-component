import React from "react";

function Ingredient(props) {
  const { ingredient, setSelectedIngredients, selectedIngredients } = props;

  const addIngredient = () => {
    setSelectedIngredients((prevState) => [...prevState, ingredient]);
  };

  const removeIngredient = () => {
    setSelectedIngredients((prevState) =>
      prevState.filter((ing) => ing !== ingredient)
    );
  };

  return (
    <div className="ingredient" key={ingredient}>
      <p>{ingredient}</p>
      {selectedIngredients.includes(ingredient) ? (
        <button className="btn danger" onClick={removeIngredient}>
          -
        </button>
      ) : (
        <button className="btn select" onClick={addIngredient}>
          +
        </button>
      )}
    </div>
  );
}

export default Ingredient;
