"use client";

import React, { ReactNode } from "react";
import { config, projectId } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

import { bsc } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

const chains = [bsc];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  enableEmail: true,
});
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
});

export function ContextProvider({ children, initialState }) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
