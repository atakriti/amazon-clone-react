import BanerCarts from "./BanerCarts"
import BanerCartTwo from "./BanerCartTwo";
import "./banerCarts.scss";

let banerImg = "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg";
// first image
let img1Link = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
let img2Link = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
let img3Link = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
let img4Link = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
// second image
let img1Link2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
let img2Link2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg"
let img3Link2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg"
let img4Link2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg"
// third 
let dressesImg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
let computersImg ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
let healthImg ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
let dealImg = "https://m.media-amazon.com/images/I/61LyqKQT-SL._AC_SY230_.jpg"
let electronicImg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"

let weShipImg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"


function Baner() {
    return (
    <div className="main">  
      <div className="mainBaner">
          <img className="bnrImg" src={banerImg} alt="" />
          {/* Gaming Accessories */}
        
            
        </div>
        <div className="banerCartsContainer">
              <BanerCarts
              h2="Gaming accessories"
              img1={img1Link}
              text1="Headesets"
              img2={img2Link}
              text2="Keyboards"
              img3={img3Link}
              text3="Computer mice"
              img4={img4Link}
              text4 = "Chairs"          
          />
                {/* Shop by Category */}
                <BanerCarts
              h2="Shop by Category"
              img1={img1Link2}
              text1="Headesets"
              img2={img2Link2}
              text2="Keyboards"
              img3={img3Link2}
              text3="Computer mice"
              img4={img4Link2}
              text4 = "Chairs"          
          />
          {/* Dresses */}
          <BanerCartTwo
            h2="Dresses"
            image={dressesImg}
          />
          {/* computers */}
          <BanerCartTwo
            h2="Computers & Accessories"
            image={computersImg}
          />
          {/* Health */}
          <BanerCartTwo
            h2="Health & Personal Care"
            image={healthImg}
          />
          {/* dealof the Day */}
          <BanerCartTwo
            h2="Deal of the Day"
            image={dealImg}
          />
          {/* Electronic  */}
          <BanerCartTwo
            h2="Electronics"
            image={electronicImg}
          />
           <BanerCartTwo
            h2="We Ship over 45 milion"
            image={weShipImg}
          />
            </div>




            </div>
  )
}

export default Baner