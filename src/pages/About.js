import React from 'react';
import HeroSection from '../components/about/HeroSection';
import MarkStory from '../components/about/MarkStory';
import MajaStory from '../components/about/MajaStory';
import Differentiators from '../components/about/Differentiators';
import CTASection from '../components/about/CTASection';
import TeamSpotlight from '../components/about/TeamSpotlight';

const About = () => {
  return (
    <div>
      <HeroSection />
      <MarkStory />
      <MajaStory />
      <Differentiators />
      <TeamSpotlight />
      <CTASection />
    </div>
  );
};

export default About;
