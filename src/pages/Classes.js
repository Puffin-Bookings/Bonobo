import React from 'react';
import ClassesHero from '../components/classes/ClassesHero';
import ClassPillars from '../components/classes/ClassPillars';
import ClassSchedule from '../components/classes/ClassSchedule';
import BookingCTA from '../components/classes/BookingCTA';
import ClassesFAQ from '../components/classes/ClassesFAQ';

const Classes = () => {
  return (
    <div>
      <ClassesHero />
      <ClassPillars />
      <ClassSchedule />
      <BookingCTA />
      <ClassesFAQ />
    </div>
  );
};

export default Classes;
