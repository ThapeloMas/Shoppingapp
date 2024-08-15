import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; 
import shoppingListReducer from "./reducers/ShoppingListReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// actions/shoppingListActions.js
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST';
export const ADD_LIST = 'ADD_LIST';

export const addItem = (listId, item) => ({
  type: ADD_ITEM,
  payload: { listId, item },
});

export const editItem = (listId, itemId, updatedItem) => ({
  type: EDIT_ITEM,
  payload: { listId, itemId, updatedItem },
});

export const deleteItem = (listId, itemId) => ({
  type: DELETE_ITEM,
  payload: { listId, itemId },
});

export const setActiveList = (listId) => ({
  type: SET_ACTIVE_LIST,
  payload: listId,
});

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
});

