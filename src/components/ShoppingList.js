import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")
  const [disItems, setItems] = useState(items)

  function handleChange (event) {
    setCategory(category => category = event.target.value)

    const newItemArr = items.filter((item) => {
      return item.category == event.target.value
    })

    setItems(newItemArr)
  }

  const displayItems = disItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems}
      </ul>
    </div>
  );
}

export default ShoppingList;