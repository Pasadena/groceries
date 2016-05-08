import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addGroceryItem, toggleItemState} from "./actions/GroceryActions";

const GroceryList = ({ items, onItemAdd, onItemChecked}) => (
  <form>
    { items.map(item =>
      <GrceryListItem  key={item.id}
        {...item}
        onClick={(event) => onItemChecked(event, item.id)}
        />)
    }
    <button onClick={(event) => onItemAdd(event) }>Add item</button>
  </form>
);

GroceryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onItemAdd: PropTypes.func.isRequired,
  onItemChecked: PropTypes.func.isRequired
}

const GrceryListItem = ({ onClick, name, amount, completed }) => (
    <div className={completed ? "completed" : null}>
      <input type="text" placeholder="Enter grocery" value={name}></input>
      <input type="text" value={amount}></input>
      <input type="checkbox" checked={completed ? "checked" : ""} onChange={onClick}/>
    </div>
  );

GrceryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
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
    },
    onItemChecked: (event, id) => {
      event.preventDefault();
      dispatch(toggleItemState(id));
    }
  }
}

const VisibleGroceryList = connect(mapStateToProps, mapDispatchToProps)(GroceryList);
const VisibleGroceryListItem = connect(mapStateToProps, mapDispatchToProps)(GrceryListItem);

export default VisibleGroceryList;
