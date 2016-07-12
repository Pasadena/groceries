import { combineReducers } from 'redux';

let tempId = -1;
let tempListId = -1;

const item = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        id: --tempId,
        name: "",
        amount: 0,
        completed: false,
        listId: null
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
    case "DELETE_ITEM":
      return state.filter(element => element.id != action.id);
    case "CLOSE_LIST":
        return [];
    default:
      return state;
  }
}

const lists = (state = {current: {}, completed: []}, action) => {
  switch(action.type) {
    case "LISTS_LOADED":
      return {current: state.current, completed: action.lists};
    case "ACTIVE_LIST_LOADED":
      return {current: action.activeList, completed: state.completed};
    case "ADD_ITEM":
      const currentWithNewItems = Object.assign({}, state.current, { items: [... state.current.items, items(state.current.items, action)] });
      return Object.assign({}, state, { current: currentWithNewItems });
    case "LIST_COMPLETED":
      return Object.assign({}, state, { current: {}, completed: [...state.completed, action.list] });
    case "CLOSE_LIST":
      let nextListId = --tempListId;
      let completedItems = action.items.map(element => item.listId = nextListId );
      items(completedItems, action);
      return [...state, { id: nextListId, createdDate: new Date(), completed: true, items: completedItems }];
    default:
      return state;
  }
}

const requests = (state = { isLoading: false }, action) => {
  switch(action.type) {
    case "LISTS_REQUESTED":
      return {isLoading: true};
    case "LISTS_LOADED":
      return {isLoading: false};
    case "COMPLETE_LIST_REQUESTED":
      return { isLoading: true };
    default:
      return {isLoading: false};
  }
}

const reduceHandlers = combineReducers({ items, lists, requests });

export default reduceHandlers;
