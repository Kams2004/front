import React, { useState } from 'react';
import './TransactionsList.css'; // Adjust CSS file path as needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const TransactionsList = () => {
  const initialTransactions = [
    { id: 1, date: '2024-09-18', amount: '$100', description: 'Payment from Patient A' },
    { id: 2, date: '2024-09-17', amount: '$250', description: 'Payment from Patient B' },
    { id: 3, date: '2024-09-16', amount: '$300', description: 'Payment from Patient C' },
    // Add more transactions as needed
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchFields, setSearchFields] = useState({
    startDate: '',
    endDate: '',
    status: '',
    commandNo: '',
    payerNo: '',
    operatorNo: '',
    minAmount: '',
    maxAmount: '',
  });

  const handleReset = () => {
    setSearchFields({
      startDate: '',
      endDate: '',
      status: '',
      commandNo: '',
      payerNo: '',
      operatorNo: '',
      minAmount: '',
      maxAmount: '',
    });
    setTransactions(initialTransactions); // Reset the transactions to initial state
  };

  return (
    <div className="transactions-list-container">
      <h2 className="text-center">List of Transactions</h2>
      <div className="blue-line"></div>
      
      <form className="transaction-filter-form">
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="startDate" 
                value={searchFields.startDate}
                onChange={(e) => setSearchFields({ ...searchFields, startDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="endDate" 
                value={searchFields.endDate}
                onChange={(e) => setSearchFields({ ...searchFields, endDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input 
                type="text" 
                className="form-control" 
                id="status" 
                placeholder="Enter status" 
                value={searchFields.status}
                onChange={(e) => setSearchFields({ ...searchFields, status: e.target.value })}
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="commandNo">Command No</label>
              <input 
                type="text" 
                className="form-control" 
                id="commandNo" 
                placeholder="Enter Command No" 
                value={searchFields.commandNo}
                onChange={(e) => setSearchFields({ ...searchFields, commandNo: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="payerNo">Payer Number</label>
              <input 
                type="text" 
                className="form-control" 
                id="payerNo" 
                placeholder="Enter Payer No" 
                value={searchFields.payerNo}
                onChange={(e) => setSearchFields({ ...searchFields, payerNo: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="operatorNo">Operator Number</label>
              <input 
                type="text" 
                className="form-control" 
                id="operatorNo" 
                placeholder="Enter Operator No" 
                value={searchFields.operatorNo}
                onChange={(e) => setSearchFields({ ...searchFields, operatorNo: e.target.value })}
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="minAmount">Min Amount</label>
              <input 
                type="number" 
                className="form-control" 
                id="minAmount" 
                placeholder="Enter Min Amount" 
                value={searchFields.minAmount}
                onChange={(e) => setSearchFields({ ...searchFields, minAmount: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxAmount">Max Amount</label>
              <input 
                type="number" 
                className="form-control" 
                id="maxAmount" 
                placeholder="Enter Max Amount" 
                value={searchFields.maxAmount}
                onChange={(e) => setSearchFields({ ...searchFields, maxAmount: e.target.value })}
              />
            </div>
          </div>
        </div>
      </form>

      <div className="form-buttons text-right">
        <button className="btn btn-primary rounded-pill" type="submit">Search</button>
        <button 
          className="btn btn-secondary rounded-pill" 
          type="reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="results-container">
        <h3>Showing {transactions.length} Results</h3>
        <table className="table table-hover table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
