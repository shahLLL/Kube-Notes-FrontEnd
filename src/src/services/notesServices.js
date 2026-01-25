import notesApi from '../api/notesApi';

/**
 * Fetches all note summaries for the logged-in user
 */
export const getAllNotes = async () => {
  try {
    const response = await notesApi.get('/all');
    // Return both status and data so the UI can render the list
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log(error.response?.data?.error || 'Fetch notes failed');
    return { status: error.response?.status || 500, data: [] };
  }
};

/**
 * Fetches the full content of a specific note
 * @param {string} id - The noteId
 */
export const getNoteById = async (id) => {
  try {
    const response = await notesApi.get(`/${id}`);
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log(error.response?.data?.error || 'Fetch note detail failed');
    return { status: error.response?.status || 500, data: null };
  }
};

/**
 * Creates a new note
 * @param {object} noteData - { title, content }
 */
export const createNote = async (noteData) => {
  try {
    const response = await notesApi.post('/', noteData);
    return response.status;
  } catch (error) {
    console.log(error.response?.data?.error || 'Creation failed');
    return error.response?.status || 500;
  }
};

/**
 * Updates an existing note
 * @param {string} id - The noteId
 * @param {object} updateData - { title, content }
 */
export const updateNote = async (id, updateData) => {
  try {
    const response = await notesApi.put(`/${id}`, updateData);
    return response.status;
  } catch (error) {
    console.log(error.response?.data?.error || 'Update failed');
    return error.response?.status || 500;
  }
};

/**
 * Deletes a note
 * @param {string} id - The noteId
 */
export const deleteNote = async (id) => {
  try {
    const response = await notesApi.delete(`/${id}`);
    return response.status;
  } catch (error) {
    console.log(error.response?.data?.error || 'Delete failed');
    return error.response?.status || 500;
  }
};