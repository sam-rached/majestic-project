import React from 'react'
import TitleText from "../../components/TitleText/TitleText";
import ActivitiesComponent from '../../components/Activities/ActivitiesComponent';
import Slider from '../../components/Slider/Slider';
import InformationsComponent from "../../components/Informations/InformationsComponent";
import "./LadiesFashion.css"

function LadiesFashion() {
  return (
    <div className="ladiesFashion">
      <TitleText title="ladies fashion" />
      <ActivitiesComponent />
      <div className="slider__wrapper">
        <Slider />
      </div>
      <div className="container__ladiesFashion">
        <div className="box__trademarksLadies">
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/majestic_angels.jpg"
            alt=""
            loading="lazy"
            title="majestic_angels"
          />
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/rucoline.jpg"
            alt=""
            loading="lazy"
            title="rucoline"
          />
          <img
            src="https://ibg-uae.com/wp-content/uploads/2022/06/kara_donna.jpg"
            alt=""
            loading="lazy"
            title="kara_donna"
          />
        </div>
        <div class="activity__wrapper">
          <p>
            Majestic Angels store, one of Dubai’s most removed multi brand, up
            market retail chain of stores – all showcasing elegance, perfection,
            freshness and authenticity.
          </p>
          <p>
            The perfect one-stop fashion destination offering high-end fashion
            brands and exclusive sale of selected avant garde and trendy fashion
            collections catering to the most affluent fashion customers.
          </p>
          <p>
            Majestic Angels Store located in BurJuman, Wafi and Sunset Mall,
            complemented by superb shoe, handbag and accessories collections.
            From festive print blouses designed to match your jeans or casual
            skirts to exquisitely cut gowns that will turn your evening extra
            special, a host of exciting creations crafted in the finest
            materials await femininity’s every whim and pure indulgence.
          </p>
          <p>
            Acclaimed designer brands such as VDP, Naughty Dog and Rucoline
            among other well known brands present a superb range of inspired
            women’s fashion collections. Casual trousers, sweat pants, tops,
            short dresses and elegant evening gowns in a palette ranging from
            pastels to brighter hues are designed to bring on the smiles this
            season.
          </p>
          <p>
            The collection has fanciful designs and calls for celebration due to
            the sheer beauty and elegance of its styling. The line has been an
            instant hit with innumerable regional stars that have shown great
            passion for these impeccable creations. Thus feel like a star this
            festive season. Visit Majestic Angels, get charmed and walk out in
            innately chic style.
          </p>
        </div>
      </div>
      <InformationsComponent />
    </div>
  );
}

export default LadiesFashion
