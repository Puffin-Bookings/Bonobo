import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/images/plank.HEIC';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          {t('hero.title')}
          <span className="block text-3xl md:text-4xl font-semibold mt-2">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 mb-8 max-w-2xl mx-auto">
          
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            {t('hero.button_trial')}
          </Link>
          <Link to="/membership" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300">
            {t('hero.button_membership')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
