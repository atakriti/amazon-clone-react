import React from "react";

function BanerCartTwo(props) {
  return (
    <div className="banerCartTwo">
      <h2>{props.h2}</h2>
      <img src={props.image} alt="" />
      <a>Shop now</a>
    </div>
  );
}

export default BanerCartTwo;
