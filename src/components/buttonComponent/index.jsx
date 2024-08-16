import React from "react";
import "./index.css";

function ButtonComponent(props) {
  const { title, className, action } = props;

  return (
    <button className={className} onClick={action}>
      {title}
    </button>
  );
}

export default ButtonComponent;
