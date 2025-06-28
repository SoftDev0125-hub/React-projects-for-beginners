// src/components/BMICalculator.jsx
import React, { useState } from 'react';
import { useTranslate, T } from '@tolgee/react';

const BMICalculator = () => {
  const { t } = useTranslate();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
      if (bmiValue < 18.5) {
        setMessage(
t('bmi-calculator-underweight'));
      } else if (bmiValue < 24.9) {
        setMessage(
t('bmi-calculator-normal-weight'));
      } else if (bmiValue < 29.9) {
        setMessage(
t('bmi-calculator-overweight'));
      } else {
        setMessage(
t('bmi-calculator-obese'));
      }
    } else {
      setMessage(
t('bmi-calculator-invalid-input'));
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setMessage('');
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">
<T keyName="bmi-calculator-title" /></h1>
      
      <form onSubmit={calculateBMI} className="mb-4">
        <div className="mb-4">
          <label className="block text-left font-medium text-gray-700 mb-1">
<T keyName="bmi-calculator-height-label" /></label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="0.01"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={
t('bmi-calculator-height-placeholder')}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-left font-medium text-gray-700 mb-1">
<T keyName="bmi-calculator-weight-label" /></label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="0.1"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={
t('bmi-calculator-weight-placeholder')}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          
<T keyName="bmi-calculator-calculate-button" />
        </button>
      </form>

      {bmi && (
        <div>
          <p className="text-lg font-semibold">
<T keyName="bmi-calculator-your-bmi" params={{ bmi }} /></p>
          <p className="text-md mt-2">{message}</p>
          <button
            onClick={resetForm}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            
<T keyName="bmi-calculator-reset-button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
