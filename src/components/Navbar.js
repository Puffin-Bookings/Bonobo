import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import bonoboLogo from '../assets/images/bonobo logo.JPEG';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for hamburger menu

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  // Function to close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleLinkClick} className="text-2xl font-bold text-gray-800">
              <img src={bonoboLogo} alt="Bonobo Gym logo" className="h-12" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.home')}</Link>
            <Link to="/classes" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.classes')}</Link>
            <Link to="/membership" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.memberships')}</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.about')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.contact')}</Link>
          </div>
          <div className="hidden md:flex items-center space-x-2">
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
          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              {/* Icon when menu is open. */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">{t('navbar.home')}</Link>
          <Link to="/classes" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">{t('navbar.classes')}</Link>
          <Link to="/membership" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">{t('navbar.memberships')}</Link>
          <Link to="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">{t('navbar.about')}</Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">{t('navbar.contact')}</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center justify-between px-5">
            <div className="relative">
                <button onClick={() => setLangDropdownOpen(!isLangDropdownOpen)} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                    <FaGlobe className="h-5 w-5" />
                </button>
                {isLangDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <button onClick={() => { changeLanguage('en'); handleLinkClick(); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                    <button onClick={() => { changeLanguage('sv'); handleLinkClick(); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Svenska</button>
                    </div>
                )}
            </div>
            <Link to="/login" onClick={handleLinkClick} className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800">{t('navbar.login')}</Link>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link to="/book" onClick={handleLinkClick} className="block w-full text-center bg-gray-800 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700">{t('navbar.book_class')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
