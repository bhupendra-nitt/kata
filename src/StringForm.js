import React, { useState } from 'react';
import { calculateSum } from "./utils";

const StringForm = () => {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const resetValues = () => {
    setResult(null);
    setErrorMessage(null);
  }

  const handleCalculate = () => {
    resetValues();
    try {
      const res = calculateSum(inputString.toString());
      if(Number.isInteger(res)) {
      setResult(res);
      } else {
        setErrorMessage(res);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">String Calculator</h2>
        <div className="mb-6">
          <label htmlFor="inputString" className="block mb-2 text-sm font-medium text-gray-700">
            Enter string to calculate sum:
          </label>
          <input
            type="text"
            id="inputString"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="e.g., 1,2,3 or //;\\n1;2;3"
            required
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-lg font-semibold"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-md flex items-center">
            <span className="text-green-500 mr-3 text-2xl">✓</span>
            <span className="text-green-700 font-medium">
              Calculated sum is {result}
            </span>
          </div>
        )}

        {errorMessage && (
          <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-md flex items-center">
            <span className="text-red-500 mr-3 text-2xl">⚠</span>
            <span className="text-red-700 font-medium">
              {errorMessage.toString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StringForm;