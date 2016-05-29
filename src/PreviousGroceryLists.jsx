import React, {PropTypes} from "react";
import {connect} from "react-redux";

const PreviousGroceryLists = ({ lists }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Time</td>
          <td>Items</td>
        </tr>
      </thead>
      <tbody>
        { lists.map(list =>
          <PreviousListItem key={list.id}
            list = {list}
          />
        )}
      </tbody>
    </table>
  </div>
)

const listShape = {
  shape: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdDate: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      listId: PropTypes.number.isRequired
    }))
  }).isRequired
}

PreviousGroceryLists.propTypes = {
  lists: PropTypes.arrayOf(listShape.shape).isRequired
}

const PreviousListItem = ({ list }) => (
  <tr>
    <td>{list.createdDate.toString()}</td>
    <td>{list.items.length}</td>
  </tr>
)

PreviousListItem.propTypes = {
  list: listShape
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const PreviousLists = connect(mapStateToProps, mapDispatchToProps)(PreviousGroceryLists);

export default PreviousLists;