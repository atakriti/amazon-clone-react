import {Link} from "react-router-dom"

function RowsContent({ h2, image }) {
  return (
    <div className="rows">
      <h2>{h2}</h2>
      <div className="rowsMain">
        <div className="rowsContainer">
          {image.map((p,i) => (
            <Link to="/"><img key={i} src={p}/></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowsContent;
