import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ListManager.css";
import {
  fetchLists,
  addList,
  deleteList,
  setActiveList,
} from "../actions/ShoppingListActions";

const ListManager = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lists = useSelector((state) => state.shoppingList.lists);
  const activeListId = useSelector((state) => state.shoppingList.activeListId);
  const [newListName, setNewListName] = useState("");

  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const handleAddList = (e) => {
    e.preventDefault();
    const newList = { name: newListName, items: [] };
    dispatch(addList(newList));
    setNewListName("");
  };

  const handleDeleteList = (listId) => {
    dispatch(deleteList(listId));
  };

  const handleSelectList = (listId) => {
    dispatch(setActiveList(listId));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="list-manager-header">
        <h3>Your Lists</h3>
        <div className="user-info">
          <span>{user.email}</span>
          <button onClick={handleLogout} className="shadow__btn">
            Logout
          </button>
        </div>
      </div>
      {lists.length > 0 ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <span
                className="shadow__btn"
                onClick={() => handleSelectList(list.id)}
              >
                {list.name} {list.id === activeListId && "(active)"}
              </span>
              <br></br>
              <br></br>
              <button
                className="shadow__btn"
                onClick={() => handleDeleteList(list.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lists available. Create a new list below.</p>
      )}
      <form onSubmit={handleAddList}>
        <input
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="New list name"
          required
        />
        <button className="shadow__btn" type="submit">
          Add List
        </button>
      </form>
    </div>
  );
};

export default ListManager;
