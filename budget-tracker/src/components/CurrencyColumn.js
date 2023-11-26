import React from 'react';

const CurrencyColumn = ({ amount, currency }) => {
  return (
    <div>
      {currency} {amount}
    </div>
  );
};

export default CurrencyColumn;
