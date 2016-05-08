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
