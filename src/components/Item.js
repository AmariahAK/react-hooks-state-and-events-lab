import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to toggle item in and out of cart
  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleToggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
