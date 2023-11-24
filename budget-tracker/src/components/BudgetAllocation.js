import React, { useState } from 'react';
import CurrencyColumn from './CurrencyColumn';

const initialDepartments = [
  { name: 'Marketing', budget: 50 },
  { name: 'Finance', budget: 300 },
  { name: 'Sales', budget: 70 },
  { name: 'Human Resource', budget: 40 },
  { name: 'IT', budget: 500 },
];

const BudgetAllocation = ({ selectedCurrency, setSelectedCurrency }) => {
  const [action, setAction] = useState('Add');
  const [cost, setCost] = useState('');

  const submitEvent = () => {
    // Implement your logic for handling the Save button click event
    console.log('Action:', action);
    console.log('Cost:', cost);
  };

  return (
    <div>
      <h3>Budget Allocation</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 1</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {initialDepartments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <td>
                <CurrencyColumn amount={department.budget} currency={selectedCurrency} />
              </td>
              <td>
                <button className='btn btn-success'>+</button>
              </td>
              <td>
                <button className='btn btn-danger'>-</button>
              </td>
              <td>
                <button className='btn btn-warning'>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='row'>
        <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>
              Department
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect01'
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue>Choose</option>
            {initialDepartments.map((department, index) => (
              <option key={index}>{department.name}</option>
            ))}
          </select>
          <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
            <label className='input-group-text' htmlFor='inputGroupSelect02'>
              Allocation
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect02'
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value='Add'>
              Add
            </option>
            <option value='Reduce'>Reduce</option>
          </select>
          <div className='form-group mt-lg-0 mt-4 align-items-center d-flex'>
            <div className='col-sm-1 d-flex align-items-center'>
              <label
                htmlFor='amount'
                className='form-label'
                style={{ marginLeft: '2rem', marginRight: '0.5rem' }}
              >
                £
              </label>
            </div>
            <input
              className='ms-5 input-group-prepend p-1'
              required='required'
              type='number'
              id='cost'
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
            <button className='btn btn-primary' onClick={submitEvent}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetAllocation;
