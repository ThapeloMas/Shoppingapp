import React from "react";
import "./ItemList.css";

const ItemList = ({ items, onEditItem, onDeleteItem }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="card">
          <div className="blob"></div>
          <div className="bg"></div>
          <div className="content">
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            {item.notes && <p>Notes: {item.notes}</p>}
            {item.category && <p>Category: {item.category}</p>}
            <button className="shadow__btn" onClick={() => onEditItem(item)}>
              Edit
            </button>
            <button
              className="shadow__btn"
              onClick={() => onDeleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
