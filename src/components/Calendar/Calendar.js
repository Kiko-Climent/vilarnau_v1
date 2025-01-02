import React from 'react';

const Calendar = () => {
  const date = new Date();
  const options = { month: 'short' };
  const month = date.toLocaleDateString('en-US', options);

  const day = date.getDate();
  const suffix = getDaySuffix(day);

  return <span>{`${month}. ${day}${suffix}`}</span>;
};


const getDaySuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st'; // 1st
    case 2: return 'nd'; // 2nd
    case 3: return 'rd'; // 3rd
    default: return 'th'; // 4th, 5th, etc.
  }
};

export default Calendar;