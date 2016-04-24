import { combineReducers } from 'redux';

const item = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        name: "",
        amount: 0
      }
      default:
        return state;
  }
}

const items = (state = [], action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return [...state, item(undefined, action)];
    default:
      return state;
  }
}

const reduceHandlers = combineReducers({ items });

export default reduceHandlers;
