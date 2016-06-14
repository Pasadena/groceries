import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addGroceryItem, toggleItemState, changeItemName, changeItemAmount, deleteItem, closeList} from "./actions/GroceryActions";
import {Button, FormGroup, FormControl, Checkbox, Col} from 'react-bootstrap';

const GroceryList = ({ items, onItemAdd, onItemChecked, onNameChange, onAmountChange, onItemDeleted, onCloseList}) => {
  let doneSection = items.length > 0 ?
    <span className="glyphicon glyphicon-ok icon icon-primary" onClick={(event) => onCloseList(event, items) } />
      :
    null;
  return (
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
      </form>
      <div className="list-controls">
        <span className="glyphicon glyphicon-plus icon icon-primary" onClick={(event) => onItemAdd(event) }
          title="Add new item"/>
        {doneSection}
      </div>
    </div>
  );
}

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
    <div className="row item-row">
      <GroceryItemInput onChange={onNameChange} value={name} completed={completed} sizeClass="col-xs-4"/>
      <GroceryItemInput onChange={onAmountChange} value={amount} completed={completed} sizeClass="col-xs-1"/>
      <FormGroup bsClass="col-xs-1" bsSize="large" className="icon-container-parent">
        {checked ? <span className="glyphicon glyphicon-check icon-container icon-primary" onClick={onClick}/> :
        <span className="glyphicon glyphicon-unchecked icon-container icon icon-primary" onClick={onClick}/> }
      </FormGroup>
      <FormGroup bsClass="col-xs-1" bsSize="large" className="icon-container-parent">
        <span className="glyphicon glyphicon-remove icon-container icon icon-danger" onClick={onDeleteClicked}/>
      </FormGroup>

    </div>
  );
}

const GroceryItemInput = ({onChange, value, completed, sizeClass}) => (
  completed ? <span>{value}</span> :
  <FormGroup bsClass={sizeClass} bsSize="large">
    <FormControl type="text" placeholder="Enter grocery" value={value} onChange={onChange}></FormControl>
  </FormGroup>
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
    items: state.items,
    lists: state.lists
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
