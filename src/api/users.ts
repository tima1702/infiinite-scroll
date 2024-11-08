import axios from 'axios';
import { INCLUDED_FIELDS, USERS_API_URL } from '../constants';
import { IUser }  from '../types/IUser.ts';

/**
 * Fetches a list of users from the API with pagination support.
 * @async
 * @function fetchUsers
 * @param {number} page - The page number for pagination.
 * @returns {Promise<IUser[]>} A promise that resolves to an array of users.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchUsers = async (page: number): Promise<IUser[]> => {
  try {
    const response = await axios.get(USERS_API_URL, {
      params: {
        inc: INCLUDED_FIELDS,
        results: 20, 
        page, 
      },
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error while fetching users:', error);
    throw error; 
  }
};
