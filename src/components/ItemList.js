
import React from "react";

const ItemList = ({ items, onEditItem, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Quantity: {item.quantity}
          {item.notes && <span> - Notes: {item.notes}</span>}
          {item.category && <span> - Category: {item.category}</span>}
          <button onClick={() => onEditItem(item)}>Edit</button>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;