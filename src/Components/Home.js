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

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <UnderNav />
      <Hero />
      <Movies />
      <News />
      <Trends />
      <Vacations />
      <LastHero />
      <Credit />
      <Footer />
    </>
  );
};

export default Home;
