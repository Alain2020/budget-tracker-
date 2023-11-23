// ExpenseItem.js
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const selectedCurrency = ''; // Remove if not needed
    const currencies = ['Pounds', 'Dollars', 'Euros', 'Rupee']; // Remove if not needed

    const handleCurrencyChange = () => {}; // Remove if not needed

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // ... (rest of the code)
};

export default ExpenseItem;
