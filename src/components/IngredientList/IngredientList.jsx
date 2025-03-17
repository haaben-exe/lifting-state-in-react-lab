const IngredientList = ({ ingredients, addIngredient }) => {
    return (
      <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color, padding: "10px", margin: "5px", cursor: "pointer" }}>
          {ingredient.name}
          <button onClick={() => addIngredient(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

  
export default IngredientList;
  