import { api } from "@/utils/api";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";

export default function Routes() {
  const { data } = api.auth.authStatus.useQuery();

  if (data) {
    return <AuthenticatedRoutes />;
  }

  return <UnauthenticatedRoutes />;
}
