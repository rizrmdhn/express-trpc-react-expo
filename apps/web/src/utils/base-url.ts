import { env } from "@/env";

/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
export const getBaseUrl = () => {
  return env.VITE_API_URL;
};
