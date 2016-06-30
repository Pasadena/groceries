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

export const groceryListsLoaded = () => ({ type: "LISTS_LOADED" });
