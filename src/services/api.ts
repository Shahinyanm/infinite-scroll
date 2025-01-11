import type { ApiResponse } from '@/types/user';
import { API_CONFIG } from '@/config/constants';

/**
 * Parameters for fetching users
 */
interface FetchUsersParams {
    /** The page number to fetch */
    page: number;
    /** The number of results per page */
    results: number;
    /** The seed for consistent random user generation */
    seed?: string;
}

/**
 * Fetches users from the randomuser.me API
 * @param {FetchUsersParams} params - The parameters for fetching users
 * @returns {Promise<ApiResponse>} A promise that resolves to the API response
 * @throws {Error} If the fetch request fails
 */
export const fetchUsers = async ({
                                     page,
                                     results,
                                     seed = API_CONFIG.DEFAULT_SEED,
                                 }: FetchUsersParams): Promise<ApiResponse> => {
    if (!page || !results) {
        throw new Error('Invalid parameters: "page" and "results" must be defined');
    }
    const url = new URL(API_CONFIG.ENDPOINTS.USERS, API_CONFIG.BASE_URL);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('results', results.toString());
    url.searchParams.append('seed', seed);

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error in fetchUsers:', error);
        throw error;
    }
};
