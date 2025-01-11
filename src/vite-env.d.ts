/// <reference types="vite/client" />

/**
 * Type definitions for Vite's import.meta.env
 */
interface ImportMetaEnv {
    /** The base URL for the API */
    readonly VITE_API_URL: string
    /** The seed for consistent random user generation */
    readonly VITE_API_SEED: string
    /** The number of results to fetch per page */
    readonly VITE_RESULTS_PER_PAGE: string
}

/**
 * Type definition for import.meta
 */
interface ImportMeta {
    /** The env object containing environment variables */
    readonly env: ImportMetaEnv
}