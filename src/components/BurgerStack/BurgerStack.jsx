const BurgerStack = ({ burgerStack, removeIngredient }) => {
  return (
    <ul>
      {burgerStack.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color, padding: "10px", margin: "5px", cursor: "pointer" }}>
          {ingredient.name}
          <button onClick={() => removeIngredient(idx)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
