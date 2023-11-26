// AppContext.js
import React, { createContext, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'SET_SELECTED_CURRENCY':
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    // Your initial expenses here
  ],
  selectedCurrency: 'USD', // Default currency
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [selectedCurrency, setSelectedCurrency] = useState(initialState.selectedCurrency);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        selectedCurrency,
        dispatch,
        setSelectedCurrency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
