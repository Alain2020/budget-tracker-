import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-4">
      <span>Budget: £{budget}</span>
    </div>
  );
};

export default Budget;
