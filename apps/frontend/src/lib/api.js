import axios from "axios";

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/signup", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
