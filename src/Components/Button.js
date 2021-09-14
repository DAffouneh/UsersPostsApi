import React from "react";
import "../App.css";
const Button = (props) => (
  <div>
    <button className="button-data" onClick={props.getData}>
      Click Me!
    </button>
  </div>
);
export default Button;
