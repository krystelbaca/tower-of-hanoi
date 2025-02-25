import axios from 'axios'

const API_URL = process.env.FRONTEND_URI || 'http://localhost:4040';

export const getHanoiSolution = async (numDisks) => {
    try {
      const response = await axios.post(`${API_URL}/play`, { numDisks });

      return response.data;
    } catch (error) {
      console.error('Error fetching Hanoi solution', error);
      throw error;
    }
};