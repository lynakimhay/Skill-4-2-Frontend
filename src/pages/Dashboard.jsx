import React, { useState, useEffect } from 'react';
import {
  getTotalFarmers,
  getTotalFarmLands,
  getTotalCropCycles,
  getTotalFarmLandsSize,

} from '../api/summary';
import '../styles/Dashboard.css';
import '../components/Header';
const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmlands] = useState(0);
  const [activeCropcycles, setActiveCropcycles] = useState(0);
  const [totalFarmlandSize, setTotalFarmlandsSize] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        const farmlandsData = await getTotalFarmLands();
        const cropcyclesData = await getTotalCropCycles();
        const farmlandSizeData = await getTotalFarmLandsSize();







        setTotalFarmers(farmersData.totalFarmers);
        setTotalFarmlands(farmlandsData.totalFarmlands);
        setActiveCropcycles(cropcyclesData.activeCropCycles);
        setTotalFarmlandsSize(farmlandSizeData.totalFarmlandSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <h2>Overview</h2>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmlands</h3>
            <p>{totalFarmlands}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Active Crop Cycles</h3>
            <p>{activeCropcycles}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Size of Farmlands</h3>
            <p>{totalFarmlandSize}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
