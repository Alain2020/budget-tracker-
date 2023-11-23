// CurrencyDropdown.js
import React from 'react';

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
                    <label className='input-group-text' htmlFor='currencyDropdown'>
                        {selectedCurrency === 'Pounds' && '£'}
                        {selectedCurrency === 'Dollars' && '$'}
                        {selectedCurrency === 'Euros' && '€'}
                        {selectedCurrency === 'Rupee' && '₹'}
                    </label>
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
