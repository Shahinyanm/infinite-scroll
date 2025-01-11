/**
 * Configuration for the API
 */
export const API_CONFIG = {
    /** Base URL for the API */
    BASE_URL: import.meta.env.VITE_API_URL || 'https://randomuser.me/api',
    /** Default seed for consistent random user generation */
    DEFAULT_SEED: import.meta.env.VITE_API_SEED || 'abc',
    /** API endpoints */
    ENDPOINTS: {
        /** Endpoint for fetching users */
        USERS: '',
    }
} as const;

/**
 * Configuration for pagination
 */
export const PAGINATION = {
    /** Default page number */
    DEFAULT_PAGE: 1,
    /** Default number of results per page */
    DEFAULT_RESULTS_PER_PAGE: Number(import.meta.env.VITE_RESULTS_PER_PAGE) || 20,
} as const;