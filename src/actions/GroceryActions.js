export const addGroceryItem = (item) => {
  return {
    type: "ADD_ITEM",
    item
  }
}

export const toggleItemState = (id) => {
  return {
    type: "TOGGLE_ITEM_STATE",
    id
  }
}

export const changeItemName = (id, name) => {
  return {
    type: "CHANGE_ITEM_NAME",
    id,
    name
  }
}

export const changeItemAmount = (id, amount) => {
  return {
    type: "CHANGE_ITEM_AMOUNT",
    id,
    amount
  }
}

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id
  }
}
