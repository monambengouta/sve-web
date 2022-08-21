import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';
import Main from '../../Components/Main/Main';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import Plan from '../../Components/Plan/Plan';
export default function Home() {

  return (

    <div className='home__container'>
      <Navbar />
      <Main />
      <ServiceSection />
      <Plan />
    </div>
  );
}
