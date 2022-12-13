import React from 'react';
import './InformationsComponent.css';
import MainTitle from "../../assets/images/majestic-logo-1x.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function InformationsComponent() {
  return (
    <div className="informationsComponent">
      <section className="aboutus">
        <img className="main__title" src={MainTitle} alt="logo" />
        <p>
          Retail chain of luxury stores continues to delight customers by
          offering avant garde and trendy fashion collections.
        </p>
        <div className="iconList">
          <a
            href="https://www.facebook.com/PREV33/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.facebook.com/PREV33/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

export default InformationsComponent
