import { QueryClientProvider } from "@tanstack/react-query";
import type { QueryClient } from "@tanstack/react-query";
import {
  httpBatchLink,
  loggerLink,
  splitLink,
  unstable_httpBatchStreamLink,
} from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";

import type { AppRouter } from "@rizrmdhn/api";
import { createQueryClient } from "./query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { env } from "@/env";
import { getToken } from "./session-store";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient());
};

// eslint-disable-next-line react-refresh/only-export-components
export const api = createTRPCReact<AppRouter>();

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            env.VITE_MODE === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        splitLink({
          condition(op) {
            return op.path.startsWith("auth.");
          },
          true: httpBatchLink({
            transformer: SuperJSON,
            url: getBaseUrl() + "/trpc",
            headers: () => {
              const headers = new Map<string, string>();
              headers.set("x-trpc-source", "vite-react-app");

              const token = getToken();
              if (token) headers.set("Authorization", `Bearer ${token}`);

              return Object.fromEntries(headers);
            },
          }),
          false: unstable_httpBatchStreamLink({
            transformer: SuperJSON,
            url: getBaseUrl() + "/trpc",
            headers: () => {
              const headers = new Map<string, string>();
              headers.set("x-trpc-source", "vite-react-app");

              const token = getToken();
              if (token) headers.set("Authorization", `Bearer ${token}`);

              return Object.fromEntries(headers);
            },
          }),
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
        {env.VITE_MODE === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </api.Provider>
    </QueryClientProvider>
  );
}

function getBaseUrl() {
  return env.VITE_API_URL;
}
