import React from "react";

function Button1(props) {
  return (
    <div>
      {props.children}
      <button onClick={props.handleclick}>clik me</button>
    </div>
  );
}

export default Button1;
