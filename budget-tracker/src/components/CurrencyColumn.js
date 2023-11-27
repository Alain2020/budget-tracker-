// CurrencyColumn.js
import React from 'react';

const CurrencyColumn = ({ amount, currency }) => {
  return (
    <div className="d-flex align-items-center">
      <span style={{ marginRight: '0.5rem' }}>{currency.substring(0, 1)}</span>
      <span>{amount}</span>
    </div>
  );
};

export default CurrencyColumn;
