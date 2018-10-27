import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <h3 className="col-md-4">
      Click Me Baby One More Time!
    </h3>
    <h3 className="col-md-4 text-center"  id="rw">{props.displayMessage}
    </h3>
    <h3 className="col-md-4 text-right">
    Score: {props.score} | Top Score: {props.topScore}
    </h3>

  </nav>
);

export default Nav;
