// BudgetAllocation.js
import React from 'react';
import CurrencyColumn from './CurrencyColumn'; // Import the new component

const departments = [
  { name: 'Marketing', budget: 50 },
  { name: 'Finance', budget: 300 },
  { name: 'Sales', budget: 70 },
  { name: 'Human Resource', budget: 40 },
  { name: 'IT', budget: 500 },
];

const BudgetAllocation = ({ selectedCurrency, setSelectedCurrency }) => {
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
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <CurrencyColumn amount={department.budget} currency={selectedCurrency} />
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
      <div className='row mt-3'>
        <div className='col-sm'>
          <label htmlFor='department'>Department</label>
          <select className='form-control'>
            <option>Choose</option>
            {departments.map((department, index) => (
              <option key={index}>{department.name}</option>
            ))}
          </select>
        </div>
        <div className='col-sm'>
          <label htmlFor='allocation'>Allocation</label>
          <select className='form-control'>
            <option>Add</option>
          </select>
        </div>
        <div className='col-sm'>
          <label htmlFor='amount'>£</label>
          <input type='number' className='form-control' />
        </div>
        <div className='col-sm'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetAllocation;
