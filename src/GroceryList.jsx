import React from "react";
import {connect} from "react-redux";
import {addGroceryItem} from "./actions/GroceryActions";

const GroceryList = ({ items, onItemAdd }) => (
  <form>
    { items.map((item, index) => <GrceryListItem  key={index} item={item} />) }
    <button onClick={(event) => onItemAdd(event) }>Add item</button>
  </form>
);

class GrceryListItem extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter grocery"></input>
        <input type="text"></input>
        <input type="checkbox"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemAdd: (event) => {
      event.preventDefault();
      dispatch(addGroceryItem());
    }
  }
}

const VisibleGroceryList = connect(mapStateToProps, mapDispatchToProps)(GroceryList);

export default VisibleGroceryList;
