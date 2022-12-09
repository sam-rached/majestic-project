import React from 'react';
import Slider from '../../components/Slider/Slider';
import TitleText from '../../components/TitleText/TitleText';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='aboutUs'>
     <TitleText title="about us" />
      <Slider/>
    </div>
  )
}

export default AboutUs
