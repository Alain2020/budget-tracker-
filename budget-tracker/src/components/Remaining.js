import React from 'react';

const RemainingBudget = () => {
  const remainingBudget = 1040; // Hardcoded value
  const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: £{remainingBudget}</span>
    </div>
  );
};

export default RemainingBudget;
