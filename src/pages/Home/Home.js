import React from 'react'
import './Home.css';
import Slider from '../../components/Slider/Slider';
import ActivitiesComponent from '../../components/Activities/ActivitiesComponent';

function Home() {
  return (
    <div className='home'>
        <Slider />
        <ActivitiesComponent/>
    </div>
  )
}

export default Home
