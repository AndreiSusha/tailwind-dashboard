import { motion } from 'framer-motion';
import { HiOutlineTrash } from 'react-icons/hi2';
import CommonSection from './CommonSection';

import React from 'react';

const Deleiting = () => {
  return (
    <CommonSection icon={HiOutlineTrash} title={'Deleiting'} bg="bg-red-100">
      <p className="text-gray-700 mb-4">Permanently delete your account</p>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200"
      >
        Delete Account
      </button>
    </CommonSection>
  );
};

export default Deleiting;
