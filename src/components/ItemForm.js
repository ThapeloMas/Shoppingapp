import React, { useState, useEffect } from "react";
import "./ItemForm.css";

const ItemForm = ({ onSubmit, initialItem = {} }) => {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    notes: "",
    category: "",
    ...initialItem,
  });

  useEffect(() => {
    setItem({
      name: "",
      quantity: 1,
      notes: "",
      category: "",
      ...initialItem,
    });
  }, [initialItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem({ name: "", quantity: 1, notes: "", category: "" });
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Item name"
          required
        />
        <label>Item Name</label>
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          min="1"
          required
        />
        <label>Quantity</label>
      </div>

      <div className="input-wrapper">
        <input
          name="notes"
          value={item.notes}
          onChange={handleChange}
          placeholder="Notes (optional)"
        />
        <label>Notes</label>
      </div>

      <div className="input-wrapper">
        <input
          name="category"
          value={item.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <label>Category</label>
      </div>
      <br></br>
      <button type="submit" className="shadow__btn">
        {initialItem.id ? "Update" : "Add"} Item
      </button>
      
    </form>
    
  );
};

export default ItemForm;
