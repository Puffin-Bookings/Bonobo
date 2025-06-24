import React from 'react';
import { useTranslation } from 'react-i18next';

const Announcements = ({ isOpen }) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  const announcements = t('announcements', { returnObjects: true });
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

  const activeAnnouncements = announcements.filter(announcement => {
    const endDate = new Date(announcement.endDate);
    return endDate >= today;
  });

  return (
    <div className="absolute right-0 mt-12 w-80 bg-white rounded-md shadow-lg z-20 border border-gray-200">
      <div className="p-3 font-bold border-b text-gray-800">Announcements</div>
      <ul className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        {activeAnnouncements.length > 0 ? (
          activeAnnouncements.map(announcement => (
            <li key={announcement.id} className="p-3 hover:bg-gray-50">
              <p className="text-sm text-gray-700">{announcement.message}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-sm text-gray-500">No new announcements.</li>
        )}
      </ul>
    </div>
  );
};

export default Announcements;