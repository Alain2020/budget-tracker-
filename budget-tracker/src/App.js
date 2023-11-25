// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm'; // Import the component
import RemainingBudget from './components/Remaining';
import BudgetAllocation from './components/BudgetAllocation';
import Currency from './components/Currency';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');

  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <RemainingBudget />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
          <div className=' col-sm'>
          <Currency />
          </div>
        </div>
        {/* Remove the Expenses section */}
        {/* <h3 className='mt-3'>Expenses</h3>
        <div className='row '>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div> */}
        <BudgetAllocation selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
      </div>
    </AppProvider>
  );
};

export default App;
