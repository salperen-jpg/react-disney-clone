import React from 'react';
import Navbar from './Navbar';
import UnderNav from './UnderNav';
import Hero from './Hero';
import Movies from './MovieSection/Movies';
import News from './NewsSection/News';
import Trends from './Trending/Trends';
import Vacations from './Vacation/Vacations';
import LastHero from './LastHero';
import Credit from './Credit';
import Footer from './Footer';
import Submenu from './Submenu';
import Awards from './AcademyAward/Awards';
import Womens from './WomensDay/Womens';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Submenu />
      <UnderNav />
      <Hero />
      <Movies />
      <News />
      <Trends />
      <Awards />
      <Womens />
      <Vacations />
      <LastHero />
      <Credit />
      <Footer />
      <Sidebar />
    </>
  );
};

export default Home;
