import React from "react";
import { social } from "../../social";
import "./style.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom">
 
      <div className="container">
        <span>

           
          <p><span className="styled2" id="allFoot">All</span>
          <span className="styled2" id="thatFoot">That</span>
          <span className="styled2" id="chazFoot">Chaz</span></p>

          <ul className="nav">
            <li className="nav-item">
              <a title="Visit TikTok profile"
                className="nav-link active"
                href={social.tiktok}>
                <i className="fab fa-tiktok" 
                // id="allFa"
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="Visit Instagram profile"
                className="nav-link active"
                href={social.instagram}>
                <i className="fab fa-instagram" 
                // id="thatFa"
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="Visit Facebook profile"
                className="nav-link active"
                href={social.facebook}>
                <i className="fab fa-facebook-square" 
                // id="chazFa"
                ></i></a>
            </li>
          </ul>
        </span>
      </div>

    </footer>
  );
}

export default Footer;
