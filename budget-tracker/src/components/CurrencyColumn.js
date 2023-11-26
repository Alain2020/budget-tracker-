// CurrencyColumn.js
import React from 'react';

const CurrencyColumn = ({ amount, currency }) => {
  return (
    <span>
      {currency} {amount}
    </span>
  );
};

export default CurrencyColumn;
