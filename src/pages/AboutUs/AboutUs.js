import React from 'react';
import Slider from '../../components/Slider/Slider';
import TitleText from '../../components/TitleText/TitleText';
import ActivitiesComponent from '../../components/Activities/ActivitiesComponent';
import InformationsComponent from '../../components/Informations/InformationsComponent';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutUs">
      <TitleText title="about us" />
      <ActivitiesComponent />
      <div className="slider__wrapper">
        <Slider />
      </div>
      <div className="aboutUs__wrapper">
          <p>
            Retail chain of luxury stores continues to delight customers by
            offering avant garde and trendy fashion collections.
          </p>
          <p>
            Majestic, one of Dubai’s most renowned multi-brand, upmarket retail
            chain of stores continues to assert itself as the perfect one-stop
            fashion destination in the UAE among fashion lovers, royalty,
            celebrities and socialites. Showcasing women’s and children’s
            clothing from high-end fashion brands across the world,
            top-of-the-line shoes, high-end watch and jewellery brands, writing
            instruments, accessories, leather goods and eyewear, Majestic stores
            are the luxury lover’s dream destination.
          </p>
          <p>
            Enabling majestic stores to remain on the forefront of the luxury
            scene in Dubai is its exemplary choice and selection of collections
            from each brand. An aspect that has been much acclaimed both among
            clients as well as the burgeoning luxury industry of the region.
            This can be traced to the painstaking research that goes behind the
            selection of every brand and the collections that it brings out, its
            heritage, quality standards, whether it is trendy or timeless, and
            as how it meets the demands and the tastes of customers in the
            region.
          </p>
          <p>
            Marianne Aljord, Managing Director, International Business Group
            Dubai commented,
          </p>
          <blockquote>
            <p>
                <i>
                We are proud that Majestic stores in the UAE form one of the most
              preferred destinations for international fashion labels in
              clothing, shoes, watches, jewellery and accessories. Over the
              years, our commitment and drive to showcase and promote the
              world’s high end brands in a manner matching their acclaimed
              status, has made us the preferred partner of choice among the
              world’s top designers and brands seeking to expand their client
              reach in the region. Since Dubai’s status as the world’s leading
              luxury hub continues to rise, we plan to introduce more luxury
              brands to the region which are well known across the world but are
              not as yet well known or accessible in the region.
              </i>
                
            </p>
          </blockquote>
          <p>
            The Majestic Angels store at BurJuman is a concept store that offers
            women a variety of collections from luxurious brands such as Via
            Delle Perle and Naughty Dog that are perfect for casual chic and
            casual wear, fabulous shoes, handbags and accessories collections
            from designer brands such as Phillip Plein, Ean 13, Maria Grazia
            Severi, Chiara D’este, Black Diamond, Cappopera, Kelton, to name a
            few. For younger fashionistas, leading brands such as Roberto
            Cavalli, Iceberg and Simonetta are available at Majestic Kids along
            with accessories and collections of gift sets for newborn babies.
          </p>
          <p>
            The Majestic Angels store located at Wafi City features stunning
            gowns, party dresses and work attire with ready-to-wear and evening
            wear collections including glamorous handbags and accessories from
            various internationally-renowned designer labels.
          </p>
          <p>
            One of Majestic’s most popular stores is the wholly owned Balmain
            mono-brand boutique at BurJuman Centre showcasing the acclaimed
            brand’s fashion collections, bags and shoes for women. At the
            Rucoline mono-brand boutique in Wafi one can discover high-end shoes
            for women from leading brands. Besides this, Majestic is also the
            owner of the Kara Donna boutique at Wafi City, which is known for
            its finest quality night-wear and comfort wear every-day
            collections.
          </p>
          <p>
            Majestic stores are located in prestigious spots across the UAE and
            the retail chain is part of the well known International Business
            Group-Dubai, (IBG-Majestic Group Dubai) established in 1982 and
            regarded as one of the leading distributors in the Middle East with
            activities in Paris, London, Kuwait, Turkey and Lebanon. The group’s
            dedicated pursuit of excellence and quality sees it consolidate its
            position further as one of the leading names in the luxury industry
            of the region today.
          </p>
       
      </div>
      <InformationsComponent/>
    </div>
  );
}

export default AboutUs
