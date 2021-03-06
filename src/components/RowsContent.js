import { Link } from "react-router-dom";
import React from "react";

function RowsContent({ h2, image ,handleCount}) {


  return (
    <div className="rows">
      <h2>{h2}</h2>
      <div className="rowsMain">
        <div className="rowsContainer">
          {image.map((p, i) => (
            
            <Link  key={i} to="/amazon-clone-react"><img  src={p}/>
            <button onClick={handleCount}>Add to Cart</button>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowsContent;
