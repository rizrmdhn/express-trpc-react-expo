import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { TRPCProvider } from "./utils/api.tsx";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TRPCProvider>
      <BrowserRouter>
        <App />
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </TRPCProvider>
  </StrictMode>
);
