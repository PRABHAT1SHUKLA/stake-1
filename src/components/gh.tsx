// components/Sidebar.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <motion.div
        animate={{ width: isOpen ? 300 : 80 }}
        className={`h-full bg-gray-800 shadow-xl text-white flex flex-col items-start justify-between transition-all overflow-hidden`}
      >
        {/* Toggle Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-[-15px] p-2 bg-green-500 text-black rounded-full cursor-pointer"
        >
          {isOpen ? "<<" : ">>"}
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col space-y-6 px-4 py-6">
          {/* Header */}
          {isOpen && (
            <h2 className="text-xl font-semibold mb-4">Game Settings</h2>
          )}

          {/* Bet Amount */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="bet" className="text-gray-300 text-sm">
              Bet Amount
            </label>
            <input
              id="bet"
              type="number"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter amount"
            />
            <div className="flex space-x-2">
              <button className="bg-gray-600 hover:bg-gray-500 text-white py-1 px-2 rounded-lg">
                ½
              </button>
              <button className="bg-gray-600 hover:bg-gray-500 text-white py-1 px-2 rounded-lg">
                2×
              </button>
            </div>
          </div>

          {/* Mines Selection */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="mines" className="text-gray-300 text-sm">
              Mines
            </label>
            <select
              id="mines"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Bet Button */}
          <button className="bg-green-500 hover:bg-green-400 text-white py-2 rounded-lg">
            Bet
          </button>
        </div>
      </motion.div>

      {/* Main Content Placeholder */}
      <div className="flex-1 bg-gray-900 text-white flex items-center justify-center">
        <p>Main content goes here...</p>
      </div>
    </div>
  );
};

export default Sidebar;
