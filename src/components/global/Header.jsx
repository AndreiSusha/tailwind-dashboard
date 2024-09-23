import React from 'react';
import { GiBrain } from 'react-icons/gi';


const Header = ({ title }) => {
  return (
    <header className="bg-gray-200 bg-opacity-30 backdrop-blur-md shadow-lg border-b border-gray-300">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
        <GiBrain size={34} className='mr-3'/>
        <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
