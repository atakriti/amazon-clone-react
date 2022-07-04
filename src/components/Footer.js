import React from 'react'
import "./footer.scss"
let ul1 = ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices"]
let ul2 = ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps on Amazon", "Become an Affiliate"]
let ul3 = ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"]
let ul4 = ["Amazon and COVID-19","Your Account","Your Orders","Shipping Rates & Policies","Returns & Replacements","Manage Your Content and Devices"]


function Footer() {
  return (
      <div className='footer'>
          <div className="footerContainer">
              {/* ul1 */}
              <ul>
                  <p>Get to Know Us</p>
                  {ul1.map((p,i) => <li key={i}>{ p}</li>)}
              </ul>
              {/* ul2 */}
              <ul>
                  <p>Make Money with Us</p>
              {ul2.map((p,i) => <li key={i}>{ p}</li>)}
              </ul>
              {/* ul3 */}
              <ul>
                  <p>Amazon Payment Products</p>
              {ul3.map((p,i) => <li key={i}>{ p}</li>)}
              </ul>
              {/* ul4 */}
              <ul>
                <p>Let Us Help You</p>
              {ul4.map((p,i) => <li key={i}>{ p}</li>)}
              </ul>
          </div>
      </div>
  )
}

export default Footer