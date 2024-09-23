import { motion } from 'framer-motion';

import { useState } from 'react';
import {
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from 'react-icons/hi';
import productImage from '../../assets/images/icon-app.png';

const data = [
  {
    id: 1,
    name: 'iPhone',
    category: 'Electronics',
    price: 1559.99,
    stock: 543,
    sales: 1768,
  },
  {
    id: 2,
    name: 'Hawaiian Ukulele',
    category: 'Musical Instruments',
    price: 26.99,
    stock: 39,
    sales: 142,
  },
  {
    id: 3,
    name: 'USB Car Charger',
    category: 'Electronics',
    price: 2.99,
    stock: 256,
    sales: 550,
  },
  {
    id: 4,
    name: 'Acupuncture Massage Mat',
    category: 'Fitness',
    price: 17.99,
    stock: 110,
    sales: 680,
  },
  {
    id: 5,
    name: 'Ninja Air Fryer',
    category: 'Home',
    price: 229.99,
    stock: 18,
    sales: 120,
  },
];
const ProductsTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    const filtered = data.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredData(filtered);
  };
  return (
    <motion.div
      className=" bg-white p-6 rounded-xl border border-slate-300 shadow-xl flex flex-col flex-1 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Product List</h2>
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
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredData.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 flex gap-2 items-center">
                  <img
                    src={productImage}
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {product.sales}
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

export default ProductsTable;
