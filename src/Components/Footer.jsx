import React from "react";
import "../Style/footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1>TECHYSTAR</h1>
          <p>@all rights reserved</p>
        </div>
        <div>
            <h5>Follow Us</h5>
            <div id="footer-icon">
                <a href="#">Youtube</a>
                <a href="#">Instagram</a>
                <a href="#">GitHub</a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
