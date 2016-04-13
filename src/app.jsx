import React from "react";
import {render} from "react-dom"

class App extends React.Component  {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>);
  }
}

class Header extends React.Component {
  render() {
    return <div className="header">This one is header</div>;
  }
}

class Content extends React.Component {
  render() {
    return <div className="container">Hello React world!?</div>;
  }
}

class Footer extends React.Component {
  render() {
    return <div className="footer">And this one is footer</div>;
  }
}

render(<App />, document.getElementById('app'));
