import React from "react";

export default class GroceryList extends React.Component {
  constructor() {
    super();
    this.state = {items: []};
    this.onItemAdd = this.onItemAdd.bind(this);
  }

  onItemAdd(event) {
    event.preventDefault();
    this.setState({items: [...this.state.items, {name: "", amount: 0}] });
  }

  render() {
    return (
      <form>
        { this.state.items.map((item, index) => <GrceryListItem  key={index} item={item} />) }
        <button onClick={this.onItemAdd}>Add item</button>
      </form>
    );
  }
}

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
