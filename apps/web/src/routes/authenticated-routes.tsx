import Dashboard from "@/pages/dashboard/page";
import { Routes, Route, useLocation } from "react-router";

export default function AuthenticatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
