import authApi from '../api/authApi';

/**
 * Registers a new user in the Auth Service
 * @param {string} username 
 * @param {string} password 
 */
export const registerUser = async (username, password) => {
  try {
    const response = await authApi.post('/register', {
      username,
      password,
    });
    
    return response.status;
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Registration failed';
    console.log(errorMessage)
    return response?.status || 500
  }
};

/**
 * Registers a new user in the Auth Service
 * @param {string} username 
 * @param {string} password 
 */
export const autheticateUser = async (username, password) => {
  try {
    const response = await authApi.post('/login', {
      username,
      password,
    });
    
    return response.status;
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Authentication failed';
    console.log(errorMessage)
    return response?.status || 500
  }
};