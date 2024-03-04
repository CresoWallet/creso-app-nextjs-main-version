import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
  } from "@thirdweb-dev/react";
   
  function AppWithProviders() {
    return (
      <ThirdwebProvider
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
          coinbaseWallet(),
          walletConnect(),
        ]}
        clientId="<your_client_id>"
      >
        <App />
      </ThirdwebProvider>
    );
  }