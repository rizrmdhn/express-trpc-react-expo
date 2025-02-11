import SignInPage from "@/pages/auth/sign-in/page";
import SignUpPage from "@/pages/auth/sign-up/page";
import { Routes, Route, useLocation } from "react-router";

export default function UnauthenticatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
