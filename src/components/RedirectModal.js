import React from 'react';
import { useTranslation } from 'react-i18next';

const RedirectModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const modalContent = t('redirect_modal', { returnObjects: true });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
        <p className="mb-6">{modalContent.description}</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onClose} 
            className="py-2 px-6 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300"
          >
            {modalContent.cancel_button}
          </button>
          <button 
            onClick={onConfirm} 
            className="py-2 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900"
          >
            {modalContent.confirm_button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
