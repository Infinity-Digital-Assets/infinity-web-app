import axios from "axios";

export const callApi = async (url, payload) => {
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    // Handle error here or throw an exception
    console.error("API call error:", error);
    throw error;
  }
};
