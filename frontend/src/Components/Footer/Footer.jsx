import React from "react";
import './Footer.css'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'


export default function Footer() {
  return (
    <div>
       <footer>
        <div className="footerLeft">
            <div className="footerMenu">
               <h1 className="fMenuTitle">About Us</h1>
                <ul className="fList">
                    <li className="fListItem">Company</li>
                    <li className="fListItem">Contact</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Affiliates</li>
                    <li className="fListItem">Stores</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Useful Links</h1>
                <ul className="fList">
                    <li className="fListItem">Support</li>
                    <li className="fListItem">Refund</li>
                    <li className="fListItem">FAQ</li>
                    <li className="fListItem">Feedback</li>
                    <li className="fListItem">Stories</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Products</h1>
                <ul className="fList">
                    <li className="fListItem">TV</li>
                    <li className="fListItem">Speaker</li>
                    <li className="fListItem">IOT Board</li>
                    <li className="fListItem">Iphone</li>
                    <li className="fListItem">Computers</li>
                </ul>
            </div>
        </div>
        <div className="footerRight">
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
                <div className="fMail">
                    <input type="text" placeholder="your@email.com" className="fInput" />
                    <button className="fButton">Join!</button>
                </div>
            </div>
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Follow Us</h1>
                <div className="fIcons">
                    <img src={facebook} alt="fc" className="fIcon" />
                    <img src={twitter} alt="wc" className="fIcon" />
                    <img src={instagram} alt="ic" className="fIcon" />
                    <img src={whatsapp} alt="tc" className="fIcon" />
                </div>
            </div>
            <div className="footerRightMenu">
                <span className="copyright">@Shanmugam J. All rights reserved. 2024.</span>
            </div>
         </div>
         
       </footer>
   </div>
  )
}

