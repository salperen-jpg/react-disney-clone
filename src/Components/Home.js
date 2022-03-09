import React from 'react';
import Navbar from './Navbar';
import UnderNav from './UnderNav';
import Hero from './Hero';
import Movies from './MovieSection/Movies';
import News from './NewsSection/News';
import Trends from './Trending/Trends';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <UnderNav />
      <Hero />
      <Movies />
      <News />
      <Trends />
    </>
  );
};

export default Home;
