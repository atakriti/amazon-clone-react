import "./rows.scss"
import RowsContent from "./RowsContent"
import React from "react";

// firts row
let imagesFirtsRow = [
  "https://m.media-amazon.com/images/I/91NCBKatgpL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/512DNg+rnaS._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81DW2Wo5zaL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81Xpcn98s4L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71L2i2B4DIL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81KW+WySaTL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/A17rF8ZjiiL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51F2UE5TIjL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/31sMKrq8nUL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61RJqWVnMIS._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61ox1Eh9FaL._AC_SY200_.jpg"]

// second row
let imagesSecondRow = [
  "https://m.media-amazon.com/images/I/413StStRq4L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81U-4VpNDPL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61sHuj5Q7QL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/4186R2h5DrL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81MuAQxABTL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61jTYo7ukyL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/5106le6xb1L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61cYTApbP7L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61YmcfLb+cL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61H3m5DJ4PL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81MHEIi1OsL._AC_SY200_.jpg"
]
function Rows(props) {
  return (
    <div className="main">
      <RowsContent
        h2="Frequently repurchased in Beauty and Personal Care"
        image={imagesFirtsRow}
        handleCount={props.handleCount}
      />
       <RowsContent
        h2="Popular products in PC internationally"
        image={imagesSecondRow}
        // Can i set className here ??????
        className="secondRowImages"
        handleCount={props.handleCount}

      />
    </div>
   
  )
}

export default Rows