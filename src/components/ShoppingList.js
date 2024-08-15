
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, editItem, deleteItem } from "../actions/ShoppingListActions";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import SearchBar from "./SearchBar";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const activeListId = useSelector((state) => state.shoppingList.activeListId);
  const activeList = useSelector((state) =>
    state.shoppingList.lists.find((list) => list.id === activeListId)
  );
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("");

  if (!activeList) {
    return <div>Please select or create a shopping list.</div>;
  }

  const handleAddItem = (item) => {
    dispatch(addItem(activeListId, item));
  };

  const handleEditItem = (item) => {
    dispatch(editItem(activeListId, item.id, item));
    setEditingItem(null);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(activeListId, itemId));
  };

  const filteredAndSortedItems = activeList.items
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory ? item.category === filterCategory : true)
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className="container">
      <div>
        <h2>{activeList.name}</h2>
        <ItemForm
          onSubmit={editingItem ? handleEditItem : handleAddItem}
          initialItem={editingItem || {}}
        />
        <SearchBar onSearch={setSearchTerm} />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="category">Sort by Category</option>
        </select>
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          {/* Add options for each unique category */}
        </select>
        <ItemList
          items={filteredAndSortedItems}
          onEditItem={setEditingItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default ShoppingList;