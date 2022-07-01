import "./banerCarts.scss";
function BanerCarts(props) {
  return (
    <div className="cart">
      <h2>{props.h2}</h2>
      <div className="collection">
        {/* one */}
        <span>
          <img src={props.img1} alt="" />
          <small>{props.text1}</small>
        </span>
        {/* two */}
        <span>
          <img src={props.img2} alt="" />
          <small>{props.text2}</small>
        </span>
        {/* three */}
        <span>
          <img src={props.img3} alt="" />
          <small>{props.text3}</small>
        </span>
        {/* four */}
        <span>
          <img src={props.img4} alt="" />
          <small>{props.text4}</small>
        </span>
      </div>
    </div>
  );
}

export default BanerCarts;
