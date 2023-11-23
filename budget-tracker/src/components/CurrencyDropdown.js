// CurrencyDropdown.js
import React from 'react';
import CurrencyColumn from './CurrencyColumn'; // Import the new component

const CurrencyDropdown = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ['Pounds', 'Dollars', 'Euros', 'Rupee'];

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='form-group'>
      <label htmlFor='currencyDropdown'>Currency</label>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <CurrencyColumn amount={0} currency={selectedCurrency} />
        </div>
        <select
          className='custom-select'
          id='currencyDropdown'
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
