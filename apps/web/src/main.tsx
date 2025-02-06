import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { TRPCProvider } from "./utils/api.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TRPCProvider>
      <App />
    </TRPCProvider>
  </StrictMode>
);
