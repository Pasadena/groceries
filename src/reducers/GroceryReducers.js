import { combineReducers } from 'redux';

let tempId = -1;

const item = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        id: --tempId,
        name: "",
        amount: 0,
        completed: false
      }
    case "TOGGLE_ITEM_STATE":
      if(state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    case "CHANGE_ITEM_NAME":
      if(state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, { name: action.name });
    case "CHANGE_ITEM_AMOUNT":
        if(state.id != action.id) {
          return state;
        }
        return Object.assign({}, state, { amount: parseInt(action.amount, 10) });
    default:
      return state;
  }
}

const items = (state = [], action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return [...state, item(undefined, action)];
    case "TOGGLE_ITEM_STATE":
      return state.map(element => item(element, action));
    case "CHANGE_ITEM_NAME":
      return state.map(element => item(element, action));
    case "CHANGE_ITEM_AMOUNT":
      return state.map(element => item(element, action));
    default:
      return state;
  }
}

const reduceHandlers = combineReducers({ items });

export default reduceHandlers;
