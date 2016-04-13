import React from "react";
import {render} from "react-dom"

class App extends React.Component  {
  render() {
    return (
      <div>
        <Header />
        <div>Hello React world!?</div>
        <Footer />
      </div>);
  }
}

class Header extends React.Component {
  render() {
    return <div className="header">This one is header</div>;
  }
}

class Footer extends React.Component {
  render() {
    return <div className="footer">And this one is footer</div>;
  }
}

render(<App />, document.getElementById('app'));
