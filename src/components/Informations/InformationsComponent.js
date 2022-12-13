import React from 'react';
import './InformationsComponent.css';
import MainTitle from "../../assets/images/majestic-logo-1x.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function InformationsComponent() {
  return (
    <div className="informationsComponent">
      <section className="aboutus">
        <h2>ABOUT US</h2>
        <img className="main__title" src={MainTitle} alt="logo" />
        <p>
          Retail chain of luxury stores continues to delight customers by
          offering avant garde and trendy fashion collections.
        </p>
        <div className="iconList">
          <a
            href="https://www.facebook.com/ibg.majestic/"
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
          <a
            href="https://www.facebook.com/ibg.majestic/"
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
      <section className="activities">
        <h2>ACTIVITIES</h2>
        <ul className="box__list">
          <li>
            <details>
              <summary>Ladies Fashion</summary>
              <p>
                Majestic Angels store, one of Dubai’s most removed multi brand,
                up market retail chain of stores – all showcasing elegance,
                perfection, freshness and authenticity.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Kids Fashion</summary>
              <p>
                Majestic Kids houses one of the most well know Italian brands –
                Miss Blumarine, aptly described as catering “for that brand of
                Italian miss for whom no dress is too small nor any diamond too
                big”.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Mens Fashion</summary>
              <p>
                There are the hands, heart, passion and experience of those who
                love their work and have chosen to make dreams come true.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Watches</summary>
              <p>
                A firm celebrity favourite, HYSEK watch collections have
                enriched the traditional sector of the Swiss watch industry. The
                brand’s philosophy is to imagine and create objects with strong
                personalities and a refined high tech style for customers
                seeking the exceptional and exciting.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Rucoline Shoes</summary>
              <p>
                The brand name Ruco Line began in 1987 in Mugnano, a tiny hamlet
                at the gates of the city of Perugia, and developed from an idea
                of two young entrepreneurs, Marco Santucci and Daniela Penchini.
              </p>
            </details>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default InformationsComponent
