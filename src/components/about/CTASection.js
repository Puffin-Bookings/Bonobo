import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{t('about_cta.title')}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          {t('about_cta.subtitle')}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/classes"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200"
          >
            {t('about_cta.button_schedule')}
          </Link>
          <Link
            to="/membership"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            {t('about_cta.button_trial')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
