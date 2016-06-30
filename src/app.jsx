import React from "react";
import {connect} from "react-redux";
import {render} from "react-dom";
import VisibleGroceryList from "groceries";
import PreviousLists from "lists";
import {Modal, ProgressBar} from 'react-bootstrap';
import {loadGroceryLists} from "./controllers/DataBaseController";

const mapStateToProps = (state) => {
  return {
    isLoading: state.requests.isLoading
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    loadInitialState: () => dispatch(loadGroceryLists())
  }
)

class App extends React.Component  {
  constructor(props) {
    super(props);
    const { loadInitialState } = this.props;
    loadInitialState();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
        <LoadingIndicator isLoading = {this.props.isLoading}/>
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

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

const LoadingIndicator = ( { isLoading }) => {
  return (
    <Modal show={isLoading}>
      <Modal.Body>
        <ProgressBar active now={100} />
      </Modal.Body>
    </Modal>
  );
}
