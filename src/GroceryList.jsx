import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addGroceryItem, toggleItemState, changeItemName, changeItemAmount, deleteItem, closeList} from "./actions/GroceryActions";

const GroceryList = ({ items, onItemAdd, onItemChecked, onNameChange, onAmountChange, onItemDeleted, onCloseList}) => (
  <div>
    <form>
      { items.map(item =>
        <GrceryListItem  key={item.id}
          {...item}
          onClick={(event) => onItemChecked(event, item.id)}
          onNameChange={(event) => onNameChange(event, item.id, event.target.value)}
          onAmountChange={(event) => onAmountChange(event, item.id, event.target.value)}
          onDeleteClicked={(event) => onItemDeleted(event, item.id)}
          />)
      }
      <button onClick={(event) => onItemAdd(event) }>Add item</button>
    </form>
    <div>
      <button onClick={(event) => onCloseList(event, items) }>Done</button>
    </div>
  </div>
);

GroceryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    listId: PropTypes.number
  }).isRequired).isRequired,
  onItemAdd: PropTypes.func.isRequired,
  onItemChecked: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
}

const GrceryListItem = ({ onClick, onNameChange, onAmountChange, onDeleteClicked, name, amount, completed }) => {
  let checked = completed ? "true" : null;
  return (
    <div className={completed ? "completed" : null}>
      <GroceryItemInput onChange={onNameChange} value={name} completed={completed} />
      <GroceryItemInput onChange={onAmountChange} value={amount} completed={completed} />
      <input type="checkbox" defaultChecked={completed} value={completed} onChange={onClick}/>
      <button value="Delete" onClick={onDeleteClicked} >Delete</button>
    </div>
  );
}

const GroceryItemInput = ({onChange, value, completed}) => (
  completed ? <span>{value}</span> :
  <input type="text" placeholder="Enter grocery" value={value} onChange={onChange}></input>
);

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
    },
    onItemDeleted: (event, id) => {
      event.preventDefault();
      dispatch(deleteItem(id));
    },
    onCloseList: (event, items) => {
      event.preventDefault();
      dispatch(closeList(items));
    }
  }
}

const VisibleGroceryList = connect(mapStateToProps, mapDispatchToProps)(GroceryList);

export default VisibleGroceryList;
