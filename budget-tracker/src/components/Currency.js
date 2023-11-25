import React, { useState } from "react";

const Currency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("£ Pound");
  const currencies = ["$ Dollar","£ Pound", "€ Euro", "₹ Rupee"];

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className='alert p-3 alert-success' style={{ backgroundColor: isOpen ? '#01DF74' : '' }}>
      <div className="dropdown">
        <button
          className={`btn btn-green dropdown-toggle ${isOpen ? 'active' : ''}`}
          type="button"
          id="currencyDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'white' }}
        >
          Currency ({selectedCurrency})
        </button>
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="currencyDropdown" style={{ backgroundColor: '#01DF74' }}>
          {currencies.map((currency, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;
