import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BookingCTA = () => {
  const { t } = useTranslation();
  const cta = t('booking_cta', { returnObjects: true });

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {cta.subtitle}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"> {cta.trial_button} </Link>
          <Link to="/membership" className="ml-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300"> {cta.membership_button} </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCTA;
