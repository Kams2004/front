// src/Components/Body/Body.js
import React from 'react';
import './Body.css'; // Import CSS specific to the body
import {
  TransactionsContainer,
  PatientsContainer,
  ExaminationsContainer,
  WideContainer,
  WeeklyRevenueContainer,
  StatusByChannelContainer
} from './containers'; // Import containers

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Body = () => {
  // Example values
  const examinationsInProcess = 10;
  const totalExaminations = 20;
  const progressPercent = (examinationsInProcess / totalExaminations) * 100;

  const handleReload = () => {
    // Reload logic here
    console.log('Reloading...');
  };

  return (
    <main className="dashboard">
      <div className="top-row">
        <TransactionsContainer handleReload={handleReload} />
        <PatientsContainer handleReload={handleReload} />
        <ExaminationsContainer examinationsInProcess={examinationsInProcess} progressPercent={progressPercent} handleReload={handleReload} />
      </div>

      <div className="bottom-row">
        <WideContainer handleReload={handleReload} />

        <div className="side-by-side">
          <WeeklyRevenueContainer />
          <StatusByChannelContainer />
        </div>
      </div>
    </main>
  );
};

export default Body;
