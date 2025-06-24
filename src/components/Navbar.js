import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import bonoboLogo from '../assets/images/bonobo logo.JPEG';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800"><img src={bonoboLogo} alt="Bonobo Gym logo" className="h-12" /></Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.home')}</Link>
            <Link to="/classes" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.classes')}</Link>
            <Link to="/membership" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.memberships')}</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.about')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.contact')}</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button onClick={() => setLangDropdownOpen(!isLangDropdownOpen)} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                <FaGlobe className="h-5 w-5" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                  <button onClick={() => changeLanguage('sv')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Svenska</button>
                </div>
              )}
            </div>
            <Link to="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.login')}</Link>
            <Link to="/book" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700">{t('navbar.book_class')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
