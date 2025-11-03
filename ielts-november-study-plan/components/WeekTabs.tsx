
import React from 'react';

interface WeekTabsProps {
  weeks: number[];
  activeWeek: number;
  onSelectWeek: (week: number) => void;
}

const WeekTabs: React.FC<WeekTabsProps> = ({ weeks, activeWeek, onSelectWeek }) => {
  return (
    <div className="flex justify-center bg-gray-800 rounded-full p-1 shadow-inner">
      {weeks.map((week) => (
        <button
          key={week}
          onClick={() => onSelectWeek(week)}
          className={`w-full text-center px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${
            activeWeek === week
              ? 'bg-cyan-500 text-white shadow'
              : 'text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          Tuần {week}
        </button>
      ))}
    </div>
  );
};

export default WeekTabs;
