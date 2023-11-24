// CurrencyColumn.js
import React from 'react';

const CurrencyColumn = ({ amount, currency }) => {
  return (
    <td style={{ backgroundColor: 'lemongreen', textAlign: 'center', fontWeight: 'bold' }}>
      {currency.includes('Pound') ? `£${amount}` : 'Converted Value'}
    </td>
  );
};

export default CurrencyColumn;

