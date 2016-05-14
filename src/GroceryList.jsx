import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addGroceryItem, toggleItemState, changeItemName, changeItemAmount} from "./actions/GroceryActions";

const GroceryList = ({ items, onItemAdd, onItemChecked, onNameChange, onAmountChange}) => (
  <form>
    { items.map(item =>
      <GrceryListItem  key={item.id}
        {...item}
        onClick={(event) => onItemChecked(event, item.id)}
        onNameChange={(event) => onNameChange(event, item.id, event.target.value)}
        onAmountChange={(event) => onAmountChange(event, item.id, event.target.value)}
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
  onItemChecked: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
}

const GrceryListItem = ({ onClick, onNameChange, onAmountChange, name, amount, completed }) => {
  let checked = completed ? "true" : null;
  return (
    <div className={completed ? "completed" : null}>
      <input type="text" placeholder="Enter grocery" value={name} onChange={onNameChange}></input>
      <input type="number" value={amount} onChange={onAmountChange}></input>
      <input type="checkbox" defaultChecked={completed} value={completed} onChange={onClick}/>
    </div>
  );
}

GrceryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
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
    },
    onNameChange: (event, id, name) => {
      event.preventDefault();
      dispatch(changeItemName(id, name));
    },
    onAmountChange: (event, id, amount) => {
      event.preventDefault();
      dispatch(changeItemAmount(id, amount));
    }
  }
}

const VisibleGroceryList = connect(mapStateToProps, mapDispatchToProps)(GroceryList);

export default VisibleGroceryList;
