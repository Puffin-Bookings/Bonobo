import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ctaImage from '../../assets/images/kettlebells 3.JPEG';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{t('final_cta.title')}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-200">
          {t('final_cta.subtitle')}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
            <Link to="/membership" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"> 
              {t('final_cta.button_join')}
            </Link>
            <Link to="/contact" className="ml-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300"> 
              {t('final_cta.button_trial')}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
