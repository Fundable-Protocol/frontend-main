"use client";

import { StarknetConfig, publicProvider, voyager } from "@starknet-react/core";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { sepolia, mainnet } from "@starknet-react/chains";

import { InjectedConnector } from "starknetkit/injected";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const argentMobile =
    typeof window !== "undefined"
      ? [
          ArgentMobileConnector.init({
            options: {
              dappName: "Fundable",
              url: window.location.hostname,
            },
          }),
        ]
      : [];

  const connectors = [
    new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
    new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    new InjectedConnector({ options: { id: "keplr", name: "Keplr" } }),
    new InjectedConnector({ options: { id: "metamask", name: "MetaMask" } }),
    new InjectedConnector({ options: { id: "okxwallet", name: "OKX" } }),
    new InjectedConnector({ options: { id: "fordefi", name: "Fordefi" } }),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
    ...argentMobile,
  ];

  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
      autoConnect={true}
    >
      {children}
    </StarknetConfig>
  );
}
