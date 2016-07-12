/**
GroceryList item actions
**/
export const addGroceryItem = (item) => ({ type: "ADD_ITEM", item });

export const deleteItem = (id) => ({ type: "DELETE_ITEM", id });

export const toggleItemState = (id) => ({ type: "TOGGLE_ITEM_STATE", id });

export const changeItemName = (id, name) => ({ type: "CHANGE_ITEM_NAME", id, name });

export const changeItemAmount = (id, amount) => ({ type: "CHANGE_ITEM_AMOUNT", id, amount });

/**
GroceryList actions
**/

export const closeList = (items) => ({ type: "CLOSE_LIST", items });

/**
Request status actions
**/
export const groceryListsRequested = () => ({ type: "LISTS_REQUESTED" });

export const groceryListsLoaded = (lists) => ({ type: "LISTS_LOADED", lists });

export const activeListLoaded = (activeList) => ({ type: "ACTIVE_LIST_LOADED", activeList });

export const groceeryListCompleted = (list) => ({ type: "LIST_COMPLETED", list });

export const groceryListCompleteRequested = () => ({type: "COMPLETE_LIST_REQUESTED"});
