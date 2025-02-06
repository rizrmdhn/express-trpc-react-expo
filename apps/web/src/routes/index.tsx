import { api } from "@/utils/api";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";

export default function Routes() {
  const { data } = api.auth.authStatus.useQuery(undefined, {
    // Don't retry on failure since this is an auth check
    retry: false,
    // Cache the auth state for 5 minutes
    staleTime: 5 * 60 * 1000,
  });

  if (data) {
    return <AuthenticatedRoutes />;
  }

  return <UnauthenticatedRoutes />;
}
