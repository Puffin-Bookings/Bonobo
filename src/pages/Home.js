import React from 'react';
import Hero from '../components/Hero';
import ValueProp from '../components/landing/ValueProp';
import FeaturedClasses from '../components/landing/FeaturedClasses';
import CommunityTestimonials from '../components/landing/CommunityTestimonials';
import FinalCTA from '../components/landing/FinalCTA';
import InstagramFeed from '../components/InstagramFeed';

const Home = () => {
  return (
    <>
      <Hero />
      <ValueProp />
      <FeaturedClasses />
      <CommunityTestimonials />
      <FinalCTA />
      <InstagramFeed />
    </>
  );
};

export default Home;
