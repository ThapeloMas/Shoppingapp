
import React, { useState, useEffect } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Item name"
        required
      />
      <input
        type="number"
        name="quantity"
        value={item.quantity}
        onChange={handleChange}
        min="1"
        required
      />
      <input
        name="notes"
        value={item.notes}
        onChange={handleChange}
        placeholder="Notes (optional)"
      />
      <input
        name="category"
        value={item.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">{initialItem.id ? "Update" : "Add"} Item</button>
    </form>
  );
};

export default ItemForm;