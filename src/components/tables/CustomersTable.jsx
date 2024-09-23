import { motion } from 'framer-motion';

import { useState } from 'react';
import {
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from 'react-icons/hi';

const data = [
  {
    id: 1,
    name: 'Sauron',
    email: 'Sauron@middle-earth.com',
    role: 'Customer',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Gandalf',
    email: 'Gandalf@middle-earth.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Elrond',
    email: 'Elrond@middle-earth.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Galadriel',
    email: 'Galadriel@middle-earth.com',
    role: 'Moderator',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Gollum',
    email: 'Gollum@middle-earth.com',
    role: 'Customer',
    status: 'Active',
  },
];

const CustomersTable = () => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(data);
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    const filtered = data.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered);
  };

  return (
    <motion.div
      className=" bg-white p-6 rounded-xl border border-slate-300 shadow-xl flex flex-col flex-1 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Users</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="text-sm focus:outline-none active:outline-none border border-slate-200 shadow-xl h-10 pr-11 pl-4 rounded-xl"
            onChange={handleSearch}
            value={search}
          />
          <HiOutlineSearch
            fontSize={18}
            className="text-gray-700 absolute top-1/2 right-3 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-700">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-800 text-green-100'
                        : 'bg-zinc-400 text-zinc-100'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <HiOutlinePencilAlt size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <HiOutlineTrash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CustomersTable;
