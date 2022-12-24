import React from "react";
import "./Footer.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Footer() {
 

  return (
    <>
      <div id="footer__top"></div>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="copyright">
            <p>
              International Business Group LLC (Majestic) © 2022 All rights
              reserved. <br />
              Terms of Service and Privacy Policy
            </p>
          </div>
          <div className="designed">
            <a
              href="https://samirached.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed by samirached.com
            </a>
          </div>
        </div>
        <div className="footer__top">
          <a href="#footer__top">
            <ArrowCircleUpIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
