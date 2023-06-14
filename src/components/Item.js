import React, { useState } from "react";

function Item({ name, category }) {

  let [cartItem, setCart] = useState(false)

  function addCart () {
    setCart(() => cartItem = !cartItem)
  }

  const liClass = cartItem ? "in-cart" : ""

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{cartItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
