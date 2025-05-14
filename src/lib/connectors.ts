import {
  isInArgentMobileAppBrowser,
  ArgentMobileConnector,
} from "starknetkit/argentMobile";
import {
  BraavosMobileConnector,
  isInBraavosMobileAppBrowser,
} from "starknetkit/braavosMobile";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";

import { constants } from "starknet";

export const getAvailableConnectors = () => {
  const argentMobile = ArgentMobileConnector.init({
    options: {
      dappName: "Fundable",
      url: typeof window !== "undefined" ? window.location.href : "",
      chainId: constants.NetworkName.SN_MAIN,
      projectId: "4f854415eedab0dd9258793f029e728d",
      description: "Your web3 automated payment processor",
    },
  });

  const connectorOptions = [
    { id: "braavos", name: "Braavos" },
    { id: "argentX", name: "Argent X" },
    { id: "keplr", name: "Keplr" },
    { id: "metamask", name: "MetaMask" },
    { id: "okxwallet", name: "OKX" },
    { id: "fordefi", name: "Fordefi" },
  ].map((connector) => new InjectedConnector({ options: connector }));

  switch (true) {
    case isInArgentMobileAppBrowser():
      return [argentMobile];

    case isInBraavosMobileAppBrowser():
      return [BraavosMobileConnector.init({}), argentMobile];

    default:
      return [
        ...connectorOptions,
        new WebWalletConnector({ url: "https://web.argent.xyz" }),
        argentMobile,
      ];
  }
};
