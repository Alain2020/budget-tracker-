import React from 'react';

const ExpenseTotal = () => {
  const total = 960; // Hardcoded value

  return (
    <div className='alert alert-primary p-4'>
      <span>Spent so far: £{total}</span>
    </div>
  );
};

export default ExpenseTotal;
