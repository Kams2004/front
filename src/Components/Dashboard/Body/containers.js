// // src/Components/Body/containers.js
// import React, { useEffect, useState,useCallback } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import axios from 'axios';


// const REST_API_BASE_URL = "http://172.30.110.57:8080/api/today-transactions";

// export const TransactionsContainer = ({ handleReload }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [isAmountVisible, setIsAmountVisible] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalCommissions, setTotalCommissions] = useState(0);
//   const [error, setError] = useState(null);

//   const calculateTotals = (transactions) => {
//     const totalAmt = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
//     const totalComm = transactions.reduce((acc, transaction) => acc + transaction.commission, 0);

//     setTotalAmount(totalAmt);
//     setTotalCommissions(totalComm);
//   };

//   const reloadData = useCallback(async () => {
//     try {
//       const response = await axios.get(REST_API_BASE_URL);
//       const data = response.data;

//       setTransactions(data);
//       calculateTotals(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch transactions. Please try again later.');
//     }
//   }, []); // No dependencies means it won't change unless the component unmounts

//   const toggleAmountVisibility = () => {
//     setIsAmountVisible(!isAmountVisible);
//   };

//   useEffect(() => {
//     reloadData(); // Fetch data on mount

//     // Set up polling to refresh data every 5 seconds
//     const interval = setInterval(reloadData, 5000); // Fetch every 5 seconds

//     return () => clearInterval(interval); // Clean up on component unmount
//   }, [reloadData]); // Include reloadData in the dependency array

//   return (
//     <div className="container transactions-container">
//       <i className="bi bi-arrow-clockwise reload-icon" onClick={reloadData}></i>
//       <h2 className="text-center">Today's Transactions</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       <div className="wallet-section d-flex align-items-center mt-4">
//         <i className="bi bi-wallet2 wallet-icon"></i>
//         <span className="amount ms-3 fw-bold">
//           {isAmountVisible ? `$${totalAmount.toFixed(2)}` : "*****"}
//         </span>
//         <i
//           className={`bi ${isAmountVisible ? "bi-eye-slash" : "bi-eye"} ms-3 toggle-amount-icon`}
//           onClick={toggleAmountVisibility}
//           title="Toggle Amount Visibility"
//         ></i>
//       </div>
      
//       <div className="progress mt-4">
//         <div
//           className="progress-bar progress-bar-striped"
//           role="progressbar"
//           style={{ width: '50%' }}
//           aria-valuenow="50"
//           aria-valuemin="0"
//           aria-valuemax="100"
//         ></div>
//       </div>
      
//       <div className="transaction-info d-flex justify-content-between mt-4">
//         <div className="commission d-flex align-items-center">
//           <i className="bi bi-cash-coin"></i>
//           <span className="ms-2 fw-bold">{totalCommissions} Commissions</span>
//         </div>
//         <div className="total-transactions d-flex align-items-center">
//           <i className="bi bi-receipt"></i>
//           <span className="ms-2 fw-bold">{transactions.length} Transactions</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const PatientsContainer = ({ totalPatients = 200, patientsCount = 139, handleReload }) => {
//     // Calculate progress as a percentage of total patients
//     const progressPercent = (patientsCount / totalPatients) * 100;
//     const radius = 45;
//     const circumference = 2 * Math.PI * radius; // Circumference of the circle

//     return (
//         <div className="container patients-container">
//             <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
//             <h2 className="text-center mb-4">Registered Patients</h2>
//             <div className="progress-row d-flex align-items-center justify-content-center">
//             <div className="progress-circle-Patient">
//             <svg className="progress-svg" viewBox="0 0 100 100">
//               <circle className="progress-bg" cx="50" cy="50" r="40" />
//               <circle
//                 className="progress-bar-Patient"
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 style={{ strokeDashoffset: `${circumference - (circumference * progressPercent) / 100}px` }}
//               />
//             </svg>
//             <i className="bi bi-person progress-icon-Patient"></i> {/* Icon placed directly inside the container */}
//           </div>
//                 <div className="patients-info ms-3">
//                     <span className="patients-count fw-bold">{patientsCount}</span>
//                     <span className="ms-2">Registered Patients</span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export const ExaminationsContainer = ({ examinationsInProcess, progressPercent, handleReload }) => {
//     const circumference = 251.2; // Circle circumference (2 * π * r)
  
//     return (
//       <div className="container examinations-container">
//         <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
//         <h2 className="text-center mb-4">Examinations In Process</h2>
//         <div className="progress-row d-flex align-items-center justify-content-center">
//           <div className="progress-circle">
//             <svg className="progress-svg" viewBox="0 0 100 100">
//               <circle className="progress-bg" cx="50" cy="50" r="40" />
//               <circle
//                 className="progress-bar"
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 style={{ strokeDashoffset: `${circumference - (circumference * progressPercent) / 100}px` }}
//               />
//             </svg>
//             <i className="bi bi-activity progress-icon"></i> {/* Icon placed directly inside the container */}
//           </div>
//           <div className="examination-info ms-3">
//             <span className="examination-count fw-bold">{examinationsInProcess}</span>
//             <span className="ms-2">Examinations</span>
//           </div>
//         </div>
//       </div>
//     );
//   };
// // Example of WideContainer Component
// export const WideContainer = ({ handleReload }) => (
//   <div className="wide-container p-4 shadow-sm position-relative">
//     <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
//     <h3 className="text-center mb-4">Monthly Transactions</h3>
//     <div className="d-flex justify-content-between align-items-center">
//       <div className="amount-section d-flex align-items-center">
//         <i className="bi bi-wallet2 amount-icon"></i>
//         <span className="ms-2 fw-bold">$2,000</span>
//         <span className="ms-2">Amount</span>
//       </div>
//       <div className="commission-section d-flex align-items-center">
//         <i className="bi bi-cash-coin commission-icon"></i>
//         <span className="ms-2 fw-bold">8</span>
//         <span className="ms-2">Commissions</span>
//       </div>
//       <div className="transactions-section d-flex align-items-center">
//         <i className="bi bi-receipt transactions-icon"></i>
//         <span className="ms-2 fw-bold">30</span>
//         <span className="ms-2">Transactions</span>
//       </div>
//     </div>
//   </div>
// );

// // Example of WeeklyRevenueContainer Component
// export const WeeklyRevenueContainer = () => {
//   // Data for Weekly Revenue
//   const weeklyRevenueData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: 'Revenue',
//       data: [100, 200, 300, 400, 500, 600, 700],
//       borderColor: '#4caf50',
//       backgroundColor: 'rgba(76, 175, 80, 0.2)',
//       borderWidth: 2,
//       fill: true,
//     }]
//   };

//   return (
//     <div className="container weekly-revenue-container">
//       <i className="bi bi-arrow-clockwise reload-icon" onClick={() => console.log('Reloading...')}></i>
//       <h3 className="text-center mb-4">Weekly Revenue</h3>
//       <Line data={weeklyRevenueData} />
//     </div>
//   );
// };

// // Example of StatusByChannelContainer Component
// export const StatusByChannelContainer = () => {
//   // Data for Status by Channel
//   const statusByChannelData = {
//     labels: ['Direct', 'Social Media', 'Search Engine', 'Referral'],
//     datasets: [{
//       label: 'Channels',
//       data: [40, 25, 20, 15],
//       backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
//     }]
//   };

//   return (
//     <div className="container status-by-channel-container">
//       <i className="bi bi-arrow-clockwise reload-icon" onClick={() => console.log('Reloading...')}></i>
//       <h3 className="text-center mb-4">Status by Channel</h3>
//       <Bar data={statusByChannelData} />
//     </div>
//   );
// };
// 
// src/Components/Body/containers.js
import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

export const TransactionsContainer = ({ handleReload }) => {
  const [isAmountVisible, setIsAmountVisible] = useState(false); // State to manage visibility

  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  return (
    <div className="container transactions-container">
      <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
      <h2 className="text-center">Today's Transactions</h2>
      <div className="wallet-section d-flex align-items-center mt-4">
        <i className="bi bi-wallet2 wallet-icon"></i>
        <span className="amount ms-3 fw-bold">
          {isAmountVisible ? "$1,500" : "*****"} {/* Show amount or asterisks */}
        </span>
        <i 
          className={`bi ${isAmountVisible ? "bi-eye-slash" : "bi-eye"} ms-3 toggle-amount-icon`} 
          onClick={toggleAmountVisibility} 
          title="Toggle Amount Visibility"
        ></i>
      </div>
      <div className="progress mt-4">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          style={{ width: '50%' }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="transaction-info d-flex justify-content-between mt-4">
        <div className="commission d-flex align-items-center">
          <i className="bi bi-cash-coin"></i>
          <span className="ms-2">5 Commissions</span>
        </div>
        <div className="total-transactions d-flex align-items-center">
          <i className="bi bi-receipt"></i>
          <span className="ms-2">20 Transactions</span>
        </div>
      </div>
    </div>
  );
};



export const PatientsContainer = ({ totalPatients = 200, patientsCount = 139, handleReload }) => {
    // Calculate progress as a percentage of total patients
    const progressPercent = (patientsCount / totalPatients) * 100;
    const radius = 45;
    const circumference = 2 * Math.PI * radius; // Circumference of the circle

    return (
        <div className="container patients-container">
            <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
            <h2 className="text-center mb-4">Registered Patients</h2>
            <div className="progress-row d-flex align-items-center justify-content-center">
            <div className="progress-circle-Patient">
            <svg className="progress-svg" viewBox="0 0 100 100">
              <circle className="progress-bg" cx="50" cy="50" r="40" />
              <circle
                className="progress-bar-Patient"
                cx="50"
                cy="50"
                r="40"
                style={{ strokeDashoffset: `${circumference - (circumference * progressPercent) / 100}px` }}
              />
            </svg>
            <i className="bi bi-person progress-icon-Patient"></i> {/* Icon placed directly inside the container */}
          </div>
                <div className="patients-info ms-3">
                    <span className="patients-count fw-bold">{patientsCount}</span>
                    <span className="ms-2">Registered Patients</span>
                </div>
            </div>
        </div>
    );
};
export const ExaminationsContainer = ({ examinationsInProcess, progressPercent, handleReload }) => {
    const circumference = 251.2; // Circle circumference (2 * π * r)
  
    return (
      <div className="container examinations-container">
        <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
        <h2 className="text-center mb-4">Examinations In Process</h2>
        <div className="progress-row d-flex align-items-center justify-content-center">
          <div className="progress-circle">
            <svg className="progress-svg" viewBox="0 0 100 100">
              <circle className="progress-bg" cx="50" cy="50" r="40" />
              <circle
                className="progress-bar"
                cx="50"
                cy="50"
                r="40"
                style={{ strokeDashoffset: `${circumference - (circumference * progressPercent) / 100}px` }}
              />
            </svg>
            <i className="bi bi-activity progress-icon"></i> {/* Icon placed directly inside the container */}
          </div>
          <div className="examination-info ms-3">
            <span className="examination-count fw-bold">{examinationsInProcess}</span>
            <span className="ms-2">Examinations</span>
          </div>
        </div>
      </div>
    );
  };
// Example of WideContainer Component
export const WideContainer = ({ handleReload }) => (
  <div className="wide-container p-4 shadow-sm position-relative">
    <i className="bi bi-arrow-clockwise reload-icon" onClick={handleReload}></i>
    <h3 className="text-center mb-4">Monthly Transactions</h3>
    <div className="d-md-flex justify-content-between align-items-center">
      <div className="amount-section d-flex align-items-center">
        <i className="bi bi-wallet2 amount-icon"></i>
        <span className="ms-2 fw-bold">$2,000</span>
        <span className="ms-2">Amount</span>
      </div>
      <div className="commission-section d-flex align-items-center">
        <i className="bi bi-cash-coin commission-icon"></i>
        <span className="ms-2 fw-bold">8</span>
        <span className="ms-2">Commissions</span>
      </div>
      <div className="transactions-section d-flex align-items-center">
        <i className="bi bi-receipt transactions-icon"></i>
        <span className="ms-2 fw-bold">30</span>
        <span className="ms-2">Transactions</span>
      </div>
    </div>
  </div>
);

// Example of WeeklyRevenueContainer Component
export const WeeklyRevenueContainer = () => {
  // Data for Weekly Revenue
  const weeklyRevenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue',
      data: [100, 200, 300, 400, 500, 600, 700],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderWidth: 2,
      fill: true,
    }]
  };

  return (
    <div className="container weekly-revenue-container">
      <i className="bi bi-arrow-clockwise reload-icon" onClick={() => console.log('Reloading...')}></i>
      <h3 className="text-center mb-4">Weekly Revenue</h3>
      <Line data={weeklyRevenueData} />
    </div>
  );
};

// Example of StatusByChannelContainer Component
export const StatusByChannelContainer = () => {
  // Data for Status by Channel
  const statusByChannelData = {
    labels: ['Direct', 'Social Media', 'Search Engine', 'Referral'],
    datasets: [{
      label: 'Channels',
      data: [40, 25, 20, 15],
      backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
    }]
  };

  return (
    <div className="container status-by-channel-container">
      <i className="bi bi-arrow-clockwise reload-icon" onClick={() => console.log('Reloading...')}></i>
      <h3 className="text-center mb-4">Status by Channel</h3>
      <Bar data={statusByChannelData} />
    </div>
  );
};