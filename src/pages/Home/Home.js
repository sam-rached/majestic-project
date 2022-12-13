import React from 'react'
import './Home.css';
import Slider from '../../components/Slider/Slider';
import ActivitiesComponent from '../../components/Activities/ActivitiesComponent';
import InformationsComponent from '../../components/Informations/InformationsComponent';

function Home() {
  return (
    <div className='home'>
        <Slider />
        <ActivitiesComponent/>
        <InformationsComponent/>
    </div>
  )
}

export default Home
