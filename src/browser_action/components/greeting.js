import React from "react";
import icon from "../../images/icon-128.png";
import { hot } from "react-hot-loader";

class GreetingComponent extends React.Component {
  render() {
    return (
      <div>
        <p>hello world here's whats going on popopopopo</p>
        <img src={icon} />
      </div>
    );
  }
}

export default hot(module)(GreetingComponent);
