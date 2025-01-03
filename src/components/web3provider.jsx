/* eslint-disable react/prop-types */
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const WALLETCONNECT_ID = "6c85f22e211becdf14521118fa61cb04";

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },

    walletConnectProjectId: WALLETCONNECT_ID,
    appName: "Defi Lab",

    appDescription: "Deli Lab",
    appUrl: "https://defilab.tech/",
    appIcon: "https://defilab.tech/logo.png",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
