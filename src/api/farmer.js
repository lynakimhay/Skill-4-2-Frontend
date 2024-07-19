import axios from 'axios';
import API_BASE_URL from '../config';

const farmerAPI = axios.create({
  baseURL: `${API_BASE_URL}/farmers`,
});

export const getFarmers = async () => {
  try {
    const response = await farmerAPI.get('/farmers');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};