/**
 * Represents a user object returned from the randomuser.me API
 */
export interface User {
    /** The user's name */
    name: {
        /** The user's first name */
        first: string;
        /** The user's last name */
        last: string;
    };
    /** The user's email address */
    email: string;
    /** The user's picture */
    picture: {
        /** URL of the user's medium-sized picture */
        medium: string;
    };
}

/**
 * Represents the response from the randomuser.me API
 */
export interface ApiResponse {
    /** Array of user objects */
    results: User[];
    /** Information about the API response */
    info: {
        /** The seed used for generating this set of results */
        seed: string;
        /** The number of results returned */
        results: number;
        /** The current page number */
        page: number;
        /** The API version */
        version: string;
    };
}