import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
    dispatch({
      type: 'SET_BUDGET',
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-secondary p-3">
      <div className="d-flex align-items-center">
        <span className="mr-2">Budget: £</span>
        <input
          type="number"
          value={newBudget}
          onChange={handleBudgetChange}
          className="form-control"
          style={{ maxWidth: '80px' }} // Adjust the maximum width as needed
        />
      </div>
    </div>
  );
};

export default Budget;
