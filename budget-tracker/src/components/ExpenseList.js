import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1231232, name: 'Marketing', cost: 50 },
    { id: 1231233, name: 'Finance', cost: 300 },
    { id: 1231234, name: 'Sales', cost: 70 },
    { id: 1231235, name: 'Human Resource', cost: 50 },
    { id: 1231236, name: 'IT', cost: 50 }
  ];

  return (
    <ul className='list-group'>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}  // Added a unique key for each ExpenseItem
          id={expense.id}
          name={expense.name}  // Corrected the attribute name from 'nmae' to 'name'
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
