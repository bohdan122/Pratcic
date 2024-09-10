import React from 'react';
import HeroText from './HeroText'; // Assuming HeroText is imported correctly
import HowItWorks from './HowItWorks'; // Assuming HowItWorks is imported correctly
import Projects from './Projects';
import Features from './Features';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Blog from './Blog';

const Home = () => {
  return (
    <>
      <HeroText />
      <HowItWorks />
      <Projects />
      <Features />
      <Testimonial />
      <Faq />
      <Blog />
    </>
  );
};

export default Home;