import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import RemainingBudget from './components/Remaining';
import BudgetAllocation from './components/BudgetAllocation';
import Currency from './components/Currency';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

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
            <Currency onCurrencyChange={handleCurrencyChange} />
          </div>
        </div>
        <BudgetAllocation selectedCurrency={selectedCurrency} />
      </div>
    </AppProvider>
  );
};

export default App;
