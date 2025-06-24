import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FAQ from './FAQ';
import RedirectModal from './RedirectModal';
import SEO from './SEO';

const PassItem = ({ title, price, description, children, onBuyClick }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left font-bold text-xl"
      >
        <span>{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-2xl font-bold">{price}</p>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
          {children}
          <button onClick={onBuyClick} className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-900">
            {t('Buy')}
          </button>
        </div>
      )}
    </div>
  );
};

const Membership = () => {
  const [redirectUrl, setRedirectUrl] = useState('');
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  

    const handleOpenModal = (url) => {
    setRedirectUrl(url || 'https://bonobogym.gymsystem.se/shoppa');
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);
    const handleConfirmRedirect = () => {
    window.open(redirectUrl, '_blank');
    handleCloseModal();
  };

  const page = t('membership_page', { returnObjects: true });

  if (!page || !page.header) {
    return null; // Or a loading spinner
  }

  const { header, trail_offer, pricing_cards, other_passes, comparison_table } = page;
  const { silver, gold, gold_coach } = pricing_cards;
  const table_keys = ['silver', 'gold', 'gold_coach'];

  return (
    <div className="bg-white py-16">
      <SEO title={t('seo.membership.title')} description={t('seo.membership.description')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">{header.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">{header.subtitle}</p>
        </div>

        {/* Bonobo Trail Offer */}
        <div className="mt-12 max-w-lg mx-auto bg-gray-900 text-white rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold">{trail_offer.title}</h3>
          <p className="mt-2">{trail_offer.description}</p>
          <p className="text-sm mt-2">{trail_offer.promo}</p>
          <button onClick={() => handleOpenModal(trail_offer.purchaseUrl)} className="mt-4 bg-white text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200">{trail_offer.button}</button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Silver Card */}
          <div className="border rounded-lg p-8 flex flex-col">
            <h3 className="text-3xl font-bold text-gray-900">{silver.title}</h3>
            <p className="mt-6 text-4xl font-bold">899 kr <span className="text-lg font-medium text-gray-500">{silver.price_suffix}</span></p>
            <ul className="mt-6 space-y-4 text-left mb-8">
              {silver.features.map((feature, index) => (
                <li key={index} className="flex items-start"><span className="text-gray-800 mr-2">✓</span>{feature}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <button onClick={() => handleOpenModal(silver.purchaseUrl)} className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors">{silver.button}</button>
              <p className="mt-6 text-center text-sm text-gray-500">&nbsp;<br/>&nbsp;</p>
            </div>
          </div>

          {/* Gold Card (Most Popular) */}
          <div className="border-2 border-yellow-500 rounded-lg p-8 flex flex-col relative">
            <div className="absolute top-0 -translate-y-1/2 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold">{gold.tag}</div>
            <h3 className="text-3xl font-bold text-gray-900">{gold.title}</h3>
            <p className="mt-6 text-4xl font-bold">1 099 kr <span className="text-lg font-medium text-gray-500">{gold.price_suffix}</span></p>
            <ul className="mt-6 space-y-4 text-left mb-8">
              {gold.features.map((feature, index) => (
                <li key={index} className="flex items-start"><span className="text-gray-800 mr-2">✓</span>{feature}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <button onClick={() => handleOpenModal(gold.purchaseUrl)} className="w-full bg-gray-800 text-white py-4 rounded-lg font-semibold hover:bg-gray-900">{gold.button}</button>
              <p className="mt-6 text-center text-sm text-gray-500">{gold.annual_link ? (<a href={gold.annual_link} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">{gold.annual_note}</a>) : gold.annual_note}</p>
            </div>
          </div>

          {/* Gold+Coach Card */}
          <div className="border rounded-lg p-8 flex flex-col">
            <h3 className="text-3xl font-bold text-gray-900">{gold_coach.title}</h3>
            <p className="mt-6 text-4xl font-bold">1 799 kr <span className="text-lg font-medium text-gray-500">{gold_coach.price_suffix}</span></p>
            <ul className="mt-6 space-y-4 text-left mb-8">
              {gold_coach.features.map((feature, index) => (
                <li key={index} className="flex items-start"><span className="text-gray-800 mr-2">✓</span>{feature}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <button onClick={() => handleOpenModal(gold_coach.purchaseUrl)} className="w-full bg-gray-800 text-white py-4 rounded-lg font-semibold hover:bg-gray-700">{gold_coach.button}</button>
              <p className="mt-6 text-center text-sm text-gray-500">{gold_coach.annual_link ? (<a href={gold_coach.annual_link} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">{gold_coach.annual_note}</a>) : gold_coach.annual_note}</p>
            </div>
          </div>
        </div>

        {/* Other Passes */}
        <div className="py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold">{other_passes.title}</h2>
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                    {other_passes.passes.map((pass, index) => (
                        <PassItem key={index} title={pass.title} price={pass.price} description={pass.description} onBuyClick={() => handleOpenModal(pass.purchaseUrl)}>
                            {pass.link_text && <Link to="/classes#youth-classes" className="text-gray-800 hover:underline mt-2 inline-block">{pass.link_text}</Link>}
                        </PassItem>
                    ))}
                </div>
            </div>
        </div>

        {/* Membership Comparison Table */}
        <div id="membership-comparison" className="py-12 bg-gray-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold">{comparison_table.title}</h2>
            </div>
            <div className="mt-8 overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            {comparison_table.headers.map((header, index) => (
                                <th key={header} className={`py-2 px-4 font-semibold ${index === 0 ? 'text-left' : 'text-center'}`}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        {comparison_table.rows.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-4 px-4 text-left">{row.feature}</td>
                                {table_keys.map(key => (
                                    <td key={key} className="py-4 px-4 text-center">
                                        {row[key] === '✓' ? <span className="text-gray-800">✓</span> : row[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <FAQ />

        <RedirectModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmRedirect} />

      </div>
    </div>
  );
};

export default Membership;
