import LoginPage from "@/pages/auth/sign-in/page";
import { Routes, Route, useLocation } from "react-router";

export default function UnauthenticatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
