import React, { useState } from 'react';

const StringForm = () => {
  const [inputString, setInputString] = useState('');

  const handleCalculate = () => {
    // calculation logic to be implemented here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">String Input Form</h2>
        <div className="mb-4">
          <label htmlFor="string2" className="block mb-2 text-sm font-medium text-gray-700">
            Enter string to calculate sum:
          </label>
          <input
            type="text"
            id="string2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default StringForm;