
import axios from "axios";

export const FETCH_LISTS = "FETCH_LISTS";
export const ADD_LIST = "ADD_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const SET_ACTIVE_LIST = "SET_ACTIVE_LIST";

export const fetchLists = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await axios.get(`http://localhost:3001/lists?userId=${user.id}`);
  dispatch({ type: FETCH_LISTS, payload: response.data });
};

export const addList = (list) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await axios.post("http://localhost:3001/lists", {
    ...list,
    userId: user.id,
  });
  dispatch({ type: ADD_LIST, payload: response.data });
};

export const updateList = (list) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:3001/lists/${list.id}`,
    list
  );
  dispatch({ type: UPDATE_LIST, payload: response.data });
};

export const deleteList = (listId) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/lists/${listId}`);
  dispatch({ type: DELETE_LIST, payload: listId });
};

export const setActiveList = (listId) => ({
  type: SET_ACTIVE_LIST,
  payload: listId,
});

export const addItem = (listId, item) => async (dispatch, getState) => {
  const list = getState().shoppingList.lists.find((l) => l.id === listId);
  const updatedList = {
    ...list,
    items: [...list.items, { ...item, id: Date.now() }],
  };
  dispatch(updateList(updatedList));
};

export const editItem =
  (listId, itemId, updatedItem) => async (dispatch, getState) => {
    const list = getState().shoppingList.lists.find((l) => l.id === listId);
    const updatedItems = list.items.map((item) =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    const updatedList = { ...list, items: updatedItems };
    dispatch(updateList(updatedList));
  };

export const deleteItem = (listId, itemId) => async (dispatch, getState) => {
  const list = getState().shoppingList.lists.find((l) => l.id === listId);
  const updatedItems = list.items.filter((item) => item.id !== itemId);
  const updatedList = { ...list, items: updatedItems };
  dispatch(updateList(updatedList));
};
