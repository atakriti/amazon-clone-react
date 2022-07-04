import { Link } from "react-router-dom";
import { useState } from "react";
import { Zero } from "./Header";
function RowsContent({ h2, image }) {
  let [number, setNumber] = useState(Zero)
  let handleIncrement = () => {
    setNumber(number + 1)
  }

  return (
    <div className="rows">
      <h2>{h2}</h2>
      <div className="rowsMain">
        <div className="rowsContainer">
          {image.map((p,i) => (
            <Link  key={i} to="/"><img  src={p}/>
            <button onClick={handleIncrement}>Add to Cart</button>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowsContent;
