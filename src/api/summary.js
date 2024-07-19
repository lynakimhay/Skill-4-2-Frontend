import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/summary`,
});

export const getTotalFarmers = async () => {
  try {
    const response = await summaryAPI.get('/total-farmers');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};
export const getTotalFarmLands = async () => {
  try {
    const response = await summaryAPI.get('/total-farmlands');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};
export const getTotalCropCycles = async () => {
  try {
    const response = await summaryAPI.get('/active-crop-cycles');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};
export const getTotalFarmLandsSize = async () => {
  try {
    const response = await summaryAPI.get('/total-farmland-size');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};




