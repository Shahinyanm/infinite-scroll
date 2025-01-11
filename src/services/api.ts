
/**
 * Fetches users from the randomuser.me API
 * @param {number} page - The page number to fetch
 * @param {number} results - The number of results per page
 * @returns {Promise<ApiResponse>} A promise that resolves to the API response
 * @throws {Error} If the fetch request fails
 */
export const fetchUsers = async (page: number, results: number): Promise<ApiResponse> => {
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};