import React from 'react';
import TitleText from "../../components/TitleText/TitleText";
import ActivitiesComponent from "../../components/Activities/ActivitiesComponent";
import Slider from "../../components/Slider/Slider";
import InformationsComponent from "../../components/Informations/InformationsComponent";
import "./KidsFashion.css";

function KidsFashion() {
  return (
    <div className="kidsFashion">
      <TitleText title="kids fashion" />
      <ActivitiesComponent />
      <div className="slider__wrapper">
        <Slider />
      </div>
      <div className="container__kidsFashion">
        <div className="box__trademarksKids">
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/majestic_kids.jpg"
            alt="logo1"
            loading="lazy"
            title="majestic_angels"
          />
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/majestic_angels.jpg"
            alt="logo2"
            loading="lazy"
            title="majestic_angels"
          />
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.jpg"
            alt=""
            loading="lazy"
            title="WhatsApp-Image-2022-06-22-at-10"
          />
        </div>
        <div class="activity__wrapper">
          <p>
            Trendy selection of clothing, jewellery, fashion accessories and
            more from the world’s leading kid’s fashion brands
          </p>
          <p>
            Majestic Kids houses one of the most well know Italian brands – Miss
            Blumarine, aptly described as catering “for that brand of Italian
            miss for whom no dress is too small nor any diamond too big”.
            Fashionable and in sync with the season’s trends its new collection
            has a touch of French Boho chic designed with comfort at its core to
            allow ease of movement for active youngsters. Fashionistas as well
            as their parents are sure to adore Miss Blumarine’s designs crafted
            in soft materials like superior quality cotton and denim and
            presented in a palette of pastels, immaculate whites and bright
            florals and stripes, further highlighted by generous collars,
            playful furls, bows, pockets, lace and large buttons.
          </p>
          <p>
            Also available are collections from Parrot, a brand that indulges
            its clientele in a charming blend of designs where detail is the
            focus. Soft pastels and bright colours are contrasted with floral
            designs in darker colours. Bubble dresses, shifts, leggings, shorts
            and shrugs offer temptations galore for young girls.
          </p>
          <p>
            Much sought after for the distinct couture-style dresses at Majestic
            Kids Boutique are creations from the Pamilla brand. Launched in 2005
            the girls brand collections recall the tasteful style of 1940s and
            50s. The word Pamilla is a variant of Pamela (Greek) meaning honey
            or all sweetness and its vision is to delight both the wearer and
            the viewer with creations that blend dreams in every material and
            creation capturing the delight one experiences with spring’s
            awakening.
          </p>
          <p>
            Majestic Kids Boutique is much sought for its boys wear collections
            from brands like Detomaso, BimbiBlu and Thomas Hill. Formals,
            semi-formal and casual designs for this season offers wearers
            shirts, trousers, jackets, scarves and shorts in whites and bright
            sporty colours highlighted by stripes and checks ensuring that young
            men effortlessly match up to stylish girls.
          </p>
          <div className="image__flex">
            <ul>
              <li>
                <a href="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.32-AM-768x1024.jpeg">
                  <img
                    src="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.32-AM-150x150.jpeg"
                    alt="image1"
                  />
                </a>
              </li>
              <li>
                <a href="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.33-AM-1-768x1024.jpeg">
                  <img
                    src="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.33-AM-1-150x150.jpeg"
                    alt="image2"
                  />
                </a>
              </li>
              <li>
                <a href="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.33-AM-768x1024.jpeg">
                  <img
                    src="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.33-AM-150x150.jpeg"
                    alt="image3"
                  />
                </a>
              </li>
              <li>
                <a href="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.34-AM-1-1024x768.jpeg">
                  <img
                    src="https://ibg-uae.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-22-at-10.19.34-AM-1-150x150.jpeg"
                    alt="image4"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <InformationsComponent />
    </div>
  );
}

export default KidsFashion
