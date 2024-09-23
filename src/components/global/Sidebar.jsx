import React from 'react';
import {
  HiOutlineColorSwatch,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineQrcode,
  HiOutlineThumbUp,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const sidebar_top_links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: HiOutlineColorSwatch,
    color: "#D2B48C",
  },
  {
    name: 'Products',
    path: '/products',
    icon: HiOutlineShoppingCart,
    color: '#D2B48C',
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: HiOutlineUserGroup,
    color: '#D2B48C',
  },
  {
    name: 'Analytics',
    path: '/analytics',
    icon: HiOutlineQrcode,
    color: '#D2B48C',
  },
  {
    name: 'Feedback',
    path: '/feedback',
    icon: HiOutlineThumbUp,
    color: '#D2B48C',
  },
];

const sidebar_bottom_links = [
  { name: 'Profile', 
    path: '/profile', 
    icon: HiOutlineCog, 
    color: '#D2B48C'},
  {
    name: 'Help & Support',
    path: '/support',
    icon: HiOutlineQuestionMarkCircle,
    color: '#D2B48C'
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  return (
    <motion.div
      className={`relative transition-all duration-300 ease-in-out flex-shrink-0 bg-[#473D5A] text-white w-60 p-3 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 100 }}
    >
      <div className="h-full p-4 flex flex-col ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-500 transition-colors max-w-fit"
        >
          <Menu size={30} style={{ color: '#D2B48C' }} />
        </motion.button>
        <nav className="mt-8 mb-8 flex flex-col flex-grow justify-between">
          <div>
            {sidebar_top_links.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-500 mb-2">
                  <item.icon
                    size={26}
                    style={{ color: item.color, minWidth: '26px' }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                {item.icon}
              </Link>
            ))}
          </div>

          <div>
            {sidebar_bottom_links.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-500 mb-2">
                  <item.icon
                    size={26}
                    style={{color: item.color, minWidth: '26px' }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                {item.icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
