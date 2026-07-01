import authApi from '../api/authApi'

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
    return error?.response?.status || 500
  }
};

/**
 * Clears the session and logs the user out
 */
export const logoutUser = () => {
  localStorage.removeItem('notes_jwt');
};

/**
 * Authenticates a user in the Auth Service
 * @param {string} username 
 * @param {string} password 
 */
export const autheticateUser = async (username, password) => {
  try {
    const response = await authApi.post('/login', {
      username,
      password,
    });
    const token = response?.data?.token;

    if(token) 
        localStorage.setItem('notes_jwt', token)
    else {
        console.log("Token Error")
        throw new Error("Token Error")
    }
    return response.status;
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Authentication failed';
    console.log(errorMessage)
    return error?.response?.status || 500
  }
};