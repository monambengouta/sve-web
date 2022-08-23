import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';
import Main from '../../Components/Main/Main';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import Plan from '../../Components/Plan/Plan';
import ExperienceSection from '../../Components/ExperienceSection/ExperienceSection';
import FeedBackSection from '../../Components/FeedBackSection/FeedBackSection';
import Footer from '../../Components/Footer/Footer';
export default function Home() {

  return (

    <div className='home__container'>
      <Navbar />
      <Main />
      <ServiceSection />
      <Plan />
      <ExperienceSection />
      <FeedBackSection />
      <Footer />
    </div>
  );
}
