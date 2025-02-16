import { api } from "./api";

export const useUser = () => {
  const { data: session, isSuccess } = api.auth.authStatus.useQuery();
  return {
    session,
    isSuccess,
    isAuthenticated: !!session,
  };
};
