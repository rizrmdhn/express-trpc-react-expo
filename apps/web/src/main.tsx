import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import App from "./App.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";
import { TRPCReactProvider } from "./utils/api.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TRPCReactProvider>
      <BrowserRouter>
        <App />
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </TRPCReactProvider>
  </StrictMode>
);
