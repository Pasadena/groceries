import React from "react";
import {render} from "react-dom";
import VisibleGroceryList from "groceries";
import PreviousLists from "lists";

export default class App extends React.Component  {
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>);
  }
}

class Header extends React.Component {
  render() {
    return <div className="header"></div>;
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <VisibleGroceryList />
        <PreviousLists />
      </div>);
  }
}

class Footer extends React.Component {
  render() {
    return <div className="footer"><a href="https://github.com/Pasadena/groceries">View on Github</a></div>;
  }
}
