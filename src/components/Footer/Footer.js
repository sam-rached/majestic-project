import React from 'react';
import './Footer.css';
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Footer() {

  const onTop =()=>{
    const {scrollTop}= document.documentElement;

   console.log(scrollTop);
  }

  return (
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
          <p>Designed by samirached.com</p>
        </div>
      </div>
        <div className="nav__top" onClick={onTop}>
          
            <ArrowCircleUpIcon />
        
        </div>
    </div>
  );
}

export default Footer
