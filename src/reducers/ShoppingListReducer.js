
import {
  FETCH_LISTS,
  ADD_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  SET_ACTIVE_LIST,
} from "../actions/ShoppingListActions";

const initialState = {
  lists: [],
  activeListId: null,
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return { ...state, lists: action.payload };
    case ADD_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.id ? action.payload : list
        ),
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case SET_ACTIVE_LIST:
      return { ...state, activeListId: action.payload };
    default:
      return state;
  }
};

export default shoppingListReducer;