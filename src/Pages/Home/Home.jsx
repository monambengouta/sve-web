import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';
import Main from '../../Components/Main/Main';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
export default function Home() {

  return (

    <div>
      <Navbar />
      <Main />
      <ServiceSection />
    </div>
  );
}
